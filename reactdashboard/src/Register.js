function Register() {
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register Page</h1>
      <input type="text" name="name" className="form-control" />
      <br />
      <input type="text" name="email" className="form-control" />
      <br />
      <input type="password" name="password" className="form-control" />
      <br />
      <button className="btn btn-primary"></button>
    </div>
  );
}

export default Register;
