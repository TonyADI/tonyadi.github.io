import React from 'react';
import './Keypad.css';
import { Button } from '../Button/Button'

export class Keypad extends React.Component {
    render() {
        return(
            <div id="keypad-container">
                <div>
                    <Button onClick={this.props.onClick} value="("/>
                    <Button onClick={this.props.onClick} value="CE"/>
                    <Button onClick={this.props.onClick} value=")"/>
                    <Button onClick={this.props.onClick} value="C"/> 
                </div>
                <div>
                    <Button onClick={this.props.onClick} value="1"/>
                    <Button onClick={this.props.onClick} value="2"/>
                    <Button onClick={this.props.onClick} value="3"/>
                    <Button onClick={this.props.onClick} value="+"/> 
                </div>
                <div>
                    <Button onClick={this.props.onClick} value="4"/>
                    <Button onClick={this.props.onClick} value="5"/>
                    <Button onClick={this.props.onClick} value="6"/>
                    <Button onClick={this.props.onClick} value="-"/> 
                </div>
                <div>
                    <Button onClick={this.props.onClick} value="7"/>
                    <Button onClick={this.props.onClick} value="8"/>
                    <Button onClick={this.props.onClick} value="9"/>
                    <Button onClick={this.props.onClick} value="*"/> 
                </div>
                <div>
                    <Button onClick={this.props.onClick} value="."/>
                    <Button onClick={this.props.onClick} value="0"/>
                    <Button onClick={this.props.onClick} value="="/>
                    <Button onClick={this.props.onClick} value="/"/> 
                </div>
            </div>
        );
    }
}