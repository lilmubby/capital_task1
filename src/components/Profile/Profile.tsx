import "./Profile.css"
import { Switch, Checkbox } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type {SwitchChangeEventHandler}from "antd/es/switch"

const Profile = () => {

  const checkboxHandler = (e: CheckboxChangeEvent) => {
    console.log(e);
  }
  const switchHandler = (checked: boolean) => {
    console.log(checked);
  }


  return (
    <div className='profile_container card'>
      <div className="profile_heading card_heading">
        <h3 className="card_h3">
          Profile
        </h3>
      </div>
      <div className="profile_wrapper wrap">
        <div className="bottoms others">
          <p>
            Education
          </p>
          <div className="antd">
            <Checkbox onChange={checkboxHandler} > Mandatory </Checkbox>
            <Switch 
            size="small" 
            onChange={switchHandler} 
            />
          </div>
        </div>
        <div className="bottoms others">
          <p>
            Experience
          </p>
          <div className="antd">
            <Checkbox onChange={checkboxHandler} > Mandatory </Checkbox>
            <Switch 
            size="small" 
            onChange={switchHandler} 
            />
          </div>
        </div>
        <div className="bottoms others">
          <p>
            Resume
          </p>
          <div className="antd">
            <Checkbox onChange={checkboxHandler} > Mandatory </Checkbox>
            <Switch 
            size="small" 
            onChange={switchHandler} 
            />
          </div>
        </div>

      </div>
      <button>
        <PlusOutlined /> Add a question
      </button>
    </div>
  )
}

export default Profile