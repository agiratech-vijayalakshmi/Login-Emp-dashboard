"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var card_1 = require("@angular/material/card");
var toolbar_1 = require("@angular/material/toolbar");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var layout_1 = require("@angular/cdk/layout");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var ng2_charts_1 = require("ng2-charts");
var login_guard_1 = require("./login.guard");
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                flex_layout_1.FlexLayoutModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                forms_1.ReactiveFormsModule,
                layout_1.LayoutModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                ng2_charts_1.NgChartsModule
            ],
            providers: [login_guard_1.LoginGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
