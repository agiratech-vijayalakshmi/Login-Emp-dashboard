"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmpDashboardModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var card_1 = require("@angular/material/card");
var emp_dashboard_routing_module_1 = require("./emp-dashboard-routing.module");
var emp_dashboard_component_1 = require("./emp-dashboard.component");
var table_1 = require("@angular/material/table");
var toolbar_1 = require("@angular/material/toolbar");
var chart_component_1 = require("../chart/chart.component");
var ng2_charts_1 = require("ng2-charts");
var EmpDashboardModule = /** @class */ (function () {
    function EmpDashboardModule() {
    }
    EmpDashboardModule = __decorate([
        core_1.NgModule({
            declarations: [
                emp_dashboard_component_1.EmpDashboardComponent,
                chart_component_1.ChartComponent
            ],
            imports: [
                common_1.CommonModule,
                emp_dashboard_routing_module_1.EmpDashboardRoutingModule, flex_layout_1.FlexLayoutModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                table_1.MatTableModule,
                ng2_charts_1.NgChartsModule
            ]
        })
    ], EmpDashboardModule);
    return EmpDashboardModule;
}());
exports.EmpDashboardModule = EmpDashboardModule;
