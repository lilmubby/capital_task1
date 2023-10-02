import "./PersonalInfo.css"
// import {switch}
import { Switch, Checkbox } from 'antd';
import {PlusOutlined} from "@ant-design/icons"
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


const PersonalInfo = () => {

  const switchHandler = (checked: boolean) => {
    console.log(checked);
    
  }
  const checkboxHandler = (e: CheckboxChangeEvent) => {
    console.log(e);
  }

  // const switchClick = (checked: boolean, event: Event) => {
  //   console.log("clieck event", event);
  //   console.log("clieck check", checked);
  // }

  return (
    <div className='personlInfo_container card'>
      <div className="personlInfo_heading card_heading">
        <h3 className="card_h3">
          Personal Information 
        </h3>
      </div>
    
    <div className="info_wrapper wrap">
      <div className="bottoms">
        <input type="text" placeholder="First Name" className="fieldText" />
      </div>
      <div className="bottoms">
        <input type="text" placeholder="Last Name" className="fieldText" />
      </div>
      <div className="bottoms">
        <input type="text" placeholder="Email" className="fieldText" />
      </div>
      <div className="bottoms others">
        <p>
          Phone <span>(without code)</span>
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>
      <div className="bottoms others">
        <p>
          Nationality
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>
      <div className="bottoms others">
        <p>
          Current Residence
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>
      <div className="bottoms others">
        <p>
          ID Number
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>
      <div className="bottoms others">
        <p>
          Date of birth
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>
      <div className="pd others">
        <p>
          Gender
        </p>
        <div className="antd">
          <Checkbox onChange={checkboxHandler} > Internal </Checkbox>
          <Switch size="small" onChange={switchHandler} />
        </div>
      </div>

    </div>
    <button>
      <PlusOutlined /> Add a question
    </button>
    </div>
  )
}

export default PersonalInfo