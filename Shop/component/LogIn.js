import html from "../js/core.js";
import { connect } from "../js/store.js";

const connector = connect()

function LogIn({login, create, emailMess, passwordMess, rePasswordMess}) {
    return html`
        <div class="${!login && 'display-none'}">
            <div 
                class="overlay "
                onclick="dispatch('hideLoginForm')"
            ></div>

            <div class="login-content ${create && 'display-none'}">
                <h4>Login</h4>
                <p>Email</p>
                <input class="email" type="text" placeholder="Enter your email...">
                <span class="email-noti noti ${!emailMess && 'noti-none'}}">${emailMess}</span>
                <p>Password</p>
                <input class="password" type="password" placeholder="Password must be more than 6 character...">
                <button 
                    class="login-submit"
                    onclick="dispatch('loginSubmit',document.querySelectorAll('.email')[0].value, document.querySelectorAll('.password')[0].value)"
                >LogIn</button>
                <span 
                    class="link"
                    onclick="dispatch('setCreate')"
                >Create new Account</span>
            </div>

            <div class="create-content ${!create && 'display-none'}">
                <h4>Create Account</h4>
                <p>Email</p>
                <input class="email-create" type="text" placeholder="Enter your email...">
                <span class="email-create-noti noti ${!emailMess && 'noti-none'}">${emailMess}</span>
                <p>Password</p>
                <input class="password-create" type="password" placeholder="Password must be more than 6 character...">
                <span class="email-create-noti noti ${!passwordMess && 'noti-none'}">${passwordMess}</span>
                <p>Re-Password</p>
                <input class="re-password-create" type="password" placeholder="Re-Enter your password...">
                <span class="email-create-noti noti ${!rePasswordMess && 'noti-none'}">${rePasswordMess}</span>
                <button 
                    class="create-submit"
                    onclick="dispatch('createSubmit', document.querySelectorAll('.email-create')[0].value, document.querySelectorAll('.password-create')[0].value, document.querySelectorAll('.re-password-create')[0].value)"
                >Create</button>
                <span>You had account</span>
                <span 
                    class="link"
                    onclick="dispatch('setCreate')"
                >LogIn</span>
            </div>
        </div>
    `
}
export default connector(LogIn)