import "./styles.css";

const imageUrl =
  "https://www.shutterstock.com/image-vector/seamless-pattern-unrecognizable-people-faces-600nw-84098341.jpg";

const socialMediaIcons = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/128/733/733614.png?ga=GA1.2.649960079.1694124798",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/128/3128/3128208.png?ga=GA1.1.649960079.1694124798",
  },
  {
    id: 3,
    src: "https://cdn-icons-png.flaticon.com/128/4494/4494465.png?ga=GA1.2.649960079.1694124798",
  },
  {
    id: 4,
    src: "https://cdn-icons-png.flaticon.com/128/4817/4817706.png?ga=GA1.2.649960079.1694124798",
  },
];

function SocialMediaIcons() {
  return (
    <>
      {socialMediaIcons.map((icon) => {
        return (
          <div key={icon.id} className="circle">
            <img className="icon" src={icon.src} />
          </div>
        );
      })}
    </>
  );
}

function Input(props) {
  return (
    <input
      className="input"
      type={props.text}
      placeholder={props.placeholder}
    />
  );
}

function CheckBox() {
  return (
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </div>
  );
}

function TermsAgreement() {
  return (
    <div className="terms">
      <CheckBox />
      <h3>
        I agree to the <span className="red">Terms</span> and
        <span className="red"> Privacy Policy</span>
      </h3>
    </div>
  );
}

function Button(props) {
  return (
    <button className={`button ${props.isSignUp && "dark"}`}>
      {props.text}
    </button>
  );
}

function PostImage(props) {
  return (
    <div className="image-content">
      <img
        src={imageUrl}
        alt="people smiling"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="red">Create account</h1>
          <div className="icon-wrapper">
            <SocialMediaIcons />
          </div>
          <h3>or use your email for registration:</h3>
          <div className="input-wrapper">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <TermsAgreement />
          <div className="button-wrapper">
            <Button text="Sign Up" isSignUp />
            <Button text="Sign In" />
          </div>
        </div>
        <PostImage width={300} height={600} />
      </div>
    </>
  );
}
