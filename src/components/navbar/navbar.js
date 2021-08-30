import { FontIcon } from "@fluentui/react/lib/Icon";
import "./navbar.css";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import { setIconOptions } from "@fluentui/react/lib/Styling";
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';

// Suppress icon warnings.
setIconOptions({
  disableWarnings: true,
});

const iconClass = mergeStyles({
  fontSize: 30,
  height: 50,
  width: 25,
  margin: "0 10px",
});
const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <span>
        <FontIcon iconName="Waffle" className={iconClass} />
        </span>
        <h3>M353 Security + Compliance</h3>
      </div>
      <div className="navbar-right">
      <span>
        <FontIcon iconName="Emoji2" className={iconClass} />
        </span>
        <span>
        <FontIcon iconName="Unknown" className={iconClass} />
        </span>
        <span>
        <FontIcon iconName="Ringer" className={iconClass} />
        </span>
        <Persona
          imageUrl={`https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png`}
          size={PersonaSize.size40}
          imageAlt="Annie Lindqvist, status is online"
        />
      </div>
    </div>
  );
};

export default NavbarComponent;
