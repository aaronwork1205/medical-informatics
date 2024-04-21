from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
from models import db, User
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'CS6440'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

bcrypt = Bcrypt(app)

# Apply CORS with explicit handling of origins and support for credentials
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

db.init_app(app)

@app.route('/api/login', methods=['POST', 'OPTIONS'])
@cross_origin(origin="http://localhost:3000", supports_credentials=False)  # Ensure CORS is handled for this route
def login_user():
    if request.method == 'POST':
        # Create a response to handle OPTIONS requests

        response = jsonify({'status': 'OK'})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
        response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
        return response

    # Actual login logic
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful', 'status': 'success'})
    return jsonify({'message': 'Invalid credentials', 'status': 'fail'}), 401



with app.app_context():
    db.create_all()


@app.route("/")
def hello_world():
    return "Hello, World!"



@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })




if __name__ == "__main__":
    app.run(debug=True)