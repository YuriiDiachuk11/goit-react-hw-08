export default function Home() {
  return (
    <div className="featuresList">
      <h1>
        Ready to unlock your magical contact book? Your contacts, your rules.
      </h1>
      <div className="featuresBox">
        <div className="feature">
          <div className="icon">📱</div>
          <div className="featureText">
            <h4>Add and manage contacts anytime</h4>
          </div>
        </div>

        <div className="feature">
          <div className="icon">🔎</div>
          <div className="featureText">
            <h4>Search contacts in a flash</h4>
          </div>
        </div>

        <div className="feature">
          <div className="icon">✍️</div>
          <div className="featureText">
            <h4>Edit your contacts anytime</h4>
          </div>
        </div>

        <div className="feature">
          <div className="icon">🔐</div>
          <div className="featureText">
            <h4>Keep all your data secure and private</h4>
          </div>
        </div>
      </div>

      <p>
        <strong>
          Complete your registration to unlock these features and unleash the
          full power of the app!!
        </strong>
      </p>
      <button href="/register" type="button">
        Register now
      </button>
    </div>
  );
}
