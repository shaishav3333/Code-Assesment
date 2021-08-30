import React from "react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { DocumentCard } from "@fluentui/react/lib/DocumentCard";
import { Pivot, PivotItem } from "@fluentui/react";
import { IconButton } from '@fluentui/react/lib/Button';
import "./userCard.css";
const iconClass = mergeStyles({
  fontSize: 30,
  height: 50,
  width: 25,
  margin: "0 10px",
});
const UserCardComponent = () => {
    const icon = { iconName: 'CannedChat', theme:''};
    const settings = { iconName: 'Settings' }
  return (
    <div className="user-card-container">
      <DocumentCard>
        <div className="user-details">
          <Persona
            imageUrl={`https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png`}
            size={PersonaSize.size100}
            imageAlt="Annie Lindqvist, status is online"
          />
          <div className="user-name">
            <p>
              Welcome Back
              <br /> <b>Jason</b>
            </p>
          </div>
        </div>
        <div className="user-options">
          <h4>YOUR QUICK LINKS</h4>
          <div className="user-options-links-group">
            <DefaultButton text="MS365 Office" />
            <DefaultButton text="Endpoints" />
            <DefaultButton text="Assure" />
            <DefaultButton text="Admin Centre" />
          </div>
        </div>
        <div className="user-settings">
          <h4>YOUR SETTINGS</h4>
          <div className="user-options-settings-group">
            <div className="settings">
              <div className="toolbar">
              <Pivot linkFormat="tabs">
                <PivotItem itemIcon="Tiles"></PivotItem>
                <PivotItem headerText="Roomie"></PivotItem>
                <PivotItem headerText="Default"></PivotItem>
                <PivotItem headerText="PivotItem"></PivotItem>
              </Pivot>
              </div>
            </div>
            <div className="settings flex-box">
              <div className="d-flex">
                
              <span className="circle circle1">
                <FontIcon iconName="CircleHalfFull" className={iconClass} />
                </span>
                <Pivot linkFormat="tabs">
                  <PivotItem headerText="Dark"></PivotItem>
                  <PivotItem headerText="Light"></PivotItem>
                </Pivot>
              </div>
              <div className="d-flex">
                <span className="circle">
              <IconButton iconProps={settings} />
              </span>
              </div>
              <div className="d-flex">
              <IconButton iconProps={icon} />
              </div>
            </div>
          </div>
        </div>
      </DocumentCard>
    </div>
  );
};

export default UserCardComponent;
