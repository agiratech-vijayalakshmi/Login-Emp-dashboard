"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, route) {
        this.fb = fb;
        this.route = route;
        this.loginForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(''),
            'password': new forms_1.FormControl('')
        });
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.setItem('username', 'viji');
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: '',
            password: ''
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.loginForm.value);
        var userName = localStorage.getItem('username');
        if (this.loginForm.value.username == userName) {
            console.log('submitted');
            this.route.navigate(['\emp-dashboard']);
        }
        else {
            alert('Enter valid username');
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
