(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/administradores/administradores.component */ "./src/app/components/administradores/administradores.component.ts");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_loginusers_loginusers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loginusers/loginusers.component */ "./src/app/components/loginusers/loginusers.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_agregar23_agregar23_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/agregar23/agregar23.component */ "./src/app/components/agregar23/agregar23.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
    { path: 'administradores', component: _components_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_3__["AdministradoresComponent"] },
    { path: 'admin2', component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: 'newuser', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signin', component: _components_loginusers_loginusers_component__WEBPACK_IMPORTED_MODULE_7__["LoginusersComponent"] },
    { path: 'users', component: _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_8__["UsuariosComponent"] },
    { path: 'agregar23', component: _components_agregar23_agregar23_component__WEBPACK_IMPORTED_MODULE_9__["Agregar23Component"] },
    { path: '', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'client';
    }
    AppComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AppComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/uploads', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            console.log(event); // handle event here
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/administradores/administradores.component */ "./src/app/components/administradores/administradores.component.ts");
/* harmony import */ var _components_agregar23_agregar23_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/agregar23/agregar23.component */ "./src/app/components/agregar23/agregar23.component.ts");
/* harmony import */ var _components_loginusers_loginusers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loginusers/loginusers.component */ "./src/app/components/loginusers/loginusers.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"],
                _components_administradores_administradores_component__WEBPACK_IMPORTED_MODULE_13__["AdministradoresComponent"],
                _components_agregar23_agregar23_component__WEBPACK_IMPORTED_MODULE_14__["Agregar23Component"],
                _components_loginusers_loginusers_component__WEBPACK_IMPORTED_MODULE_15__["LoginusersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]
            ],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" (click)=\"logoutUser()\" href=\"#\">{{user2}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    \n    <ul class=\"navbar-nav mr-auto nav nav-pills my-2 my-lg-0\" id=\"pills-tab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active my-2 my-sm-0\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Agregar</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link my-2 my-sm-0\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Usuarios</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link my-2 my-sm-0\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">task</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav nav my-2 my-lg-0\">\n      <li class=\"nav-item\">\n          <a class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"logoutUser()\" [routerLink]=\"['']\">Sign out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n  <div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n      <div class=\"container pad2\">\n        <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <div class=\"class-md-1\">\n                <form (submit)=\"loginUser($event)\">\n                  <div class=\"text-center mb-4\">  \n                    <h1 class=\"h3 mb-3 font-weight-normal\">Sing up</h1>\n                  </div>\n                  \n                  <div class=\"form-group\">\n                    <label for=\"user\">User Name</label>\n                    <input type=\"text\" name=\"user\" [(ngModel)]=\"user\" class=\"form-control\" placeholder=\"User Name\" required autofocus>\n                  </div>\n                  \n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>              \n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Autorization</label>\n                    <input type=\"text\" name=\"auth\" [(ngModel)]=\"auth\" class=\"form-control\" placeholder=\"Auth\" required>              \n                  </div>\n                  \n                  <div class=\"checkbox mb-3\">\n                    <label>\n                      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                  </div>\n                  <button class=\"btn btn-lg btn-dark btn-block\" type=\"submit\" value=\"Submit\">ADD</button>\n                  <p class=\"mt-3 mb-3 text-center\">&copy; 2017-2018</p>\n                </form>   \n              </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n        </div>\n      </div> \n    </div>\n\n    \n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n      <div class=\"container\">\n        <div class=\"row pad2\">\n            <div class=\"col-md-4\">\n              <table class=\"table text-center table-hover table-responsive\">\n                <thead>\n                  <tr>\n                    <th>User</th>\n                    <th>Auth</th>\n                    <th>Delete</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let task of auths\">\n                    <td class=\"pad\">{{task.user}}</td>\n                    <td class=\"pad\">{{task.auth}}</td>\n                    <td class=\"pad\">\n                      <button class=\"btn btn-danger\" (click)=\"deleteUser(task._id)\"><i class=\"fa fa-trash\"></i></button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-4\">           \n                <table class=\"table text-center table-hover table-responsive\">\n                  <thead>\n                    <tr>\n                      <th>User</th>\n                      <th>Auth</th>\n                      <th>Delete</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let task of auths1\">\n                      <td class=\"pad\">{{task.user}}</td>\n                      <td class=\"pad\">{{task.auth}}</td>\n                      <td class=\"pad\">\n                        <button class=\"btn btn-danger\" (click)=\"deleteUser1(task._id)\"><i class=\"fa fa-trash\"></i></button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"col-md-4\">\n              <table class=\"table text-center table-hover table-responsive\">\n                <thead>\n                  <tr>\n                    <th>User</th>\n                    <th>Auth</th>\n                    <th>Delete</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let task of auths2\">\n                    <td class=\"pad\">{{task.user}}</td>\n                    <td class=\"pad\">{{task.auth}}</td>\n                    <td class=\"pad\">\n                      <button class=\"btn btn-danger\" (click)=\"deleteUser2(task._id)\"><i class=\"fa fa-trash\"></i></button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>  \n        </div> \n      </div>\n    </div>\n\n    \n\n    <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n      <app-administradores></app-administradores>\n    </div>\n  </div>  \n\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>\n  \n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(Auth, Auth1, router) {
        var _this = this;
        this.Auth = Auth;
        this.Auth1 = Auth1;
        this.router = router;
        this.Auth.getUserauth(1)
            .subscribe(function (auths) {
            console.log(auths);
            _this.auths = auths;
        });
        this.Auth1.getUserauth(2)
            .subscribe(function (auths1) {
            console.log(auths1);
            _this.auths1 = auths1;
        });
        this.Auth.getUserauth(3)
            .subscribe(function (auths) {
            console.log(auths);
            _this.auths2 = auths;
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.user2 = this.Auth.getCurrentUser();
    };
    //crear metodo get para un usuario
    //
    AdminComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var newAuth = {
            user: this.user,
            password: this.password,
            auth: this.auth
        };
        this.Auth.addUser(newAuth)
            .subscribe(function (auth) {
            _this.auths.push(auth);
            _this.auths1.push(auth);
            _this.user = '';
            _this.password = '';
            _this.auth = '';
        });
    };
    AdminComponent.prototype.logoutUser = function () {
        this.Auth.logoutUser();
        this.router.navigate(['']);
    };
    AdminComponent.prototype.deleteUser = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var auth_1 = this.auths;
            this.Auth.deleteUser(id)
                .subscribe(function (data) {
                console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < auth_1.length; i++) {
                        if (auth_1[i]._id == id) {
                            auth_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    AdminComponent.prototype.deleteUser1 = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var auth_2 = this.auths1;
            this.Auth.deleteUser(id)
                .subscribe(function (data) {
                console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < auth_2.length; i++) {
                        if (auth_2[i]._id == id) {
                            auth_2.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    AdminComponent.prototype.deleteUser2 = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var auth_3 = this.auths2;
            this.Auth.deleteUser(id)
                .subscribe(function (data) {
                console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < auth_3.length; i++) {
                        if (auth_3[i]._id == id) {
                            auth_3.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/administradores/administradores.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/administradores/administradores.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n\n\n<main role=\"main\" class=\"col-md-7 col-lg-7 px-2\">\n    <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n      <h1 class=\"h2\">Menu</h1>\n    </div>\n    <div class=\"container \">\n      <div class=\"row\">\n          <div *ngFor=\"let task of tasks\" class=\"card col-md-5 col-xs-5 thumb\">\n              <div class=\"card-header btn-secondary active\">\n                  Restaurant\n              </div>\n              <a href=\"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" rel=\"ligthbox\">\n                  <img class=\"card-img-top d-block w-100 h-auto img-fluid\" src=\"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{task.title}}</h5>\n                  <p class=\"card-text\">{{task.description}}.</p>\n              </div>\n              <div class=\"card-footer text-right btn-secondary active\">\n                  <td class=\"pad\">${{task.precio}}</td>\n                  <td></td>\n                  <td class=\"col-sm-2\">\n                    <button type=\"button\" class=\"btn btn-primary my-2 my-sm-0\" (click)=\"buy(task._id)\" ><span class=\"fa fa-shopping-cart\"></span> Buy</button>\n                  </td>\n              </div>\n          </div>\n     </div>\n  </div>\n</main>  \n<nav class=\"col-sm-3 d-block sidebar \">\n    <div class=\"sidebar-sticky\">\n        <h4 class=\"sidebar-heading d-flex justify-content-between align-items-center mb-1 text-muted\">\n            <span>Sales</span>\n        </h4>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item border-success d-flex justify-content-between lh-condensed\" *ngFor=\"let producto of tasks2\">\n                      <div>\n                        <h6 class=\"my-0\">{{producto.title}}</h6>\n                      </div>\n                      <span class=\"text-muted\">{{producto.precio | currency}}</span>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between\">\n                      <span>Total (USD)</span>\n                      <strong>$20</strong>\n                    </li>\n                  </ul>\n        \n                  <form class=\"card p-2\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n                      <div class=\"input-group-append\">\n                        <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n        </div>\n        \n    </div>\n  </nav>      \n\n"

/***/ }),

/***/ "./src/app/components/administradores/administradores.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/administradores/administradores.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdministradoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradoresComponent", function() { return AdministradoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdministradoresComponent = /** @class */ (function () {
    function AdministradoresComponent(authsevice, taskService) {
        var _this = this;
        this.authsevice = authsevice;
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.tasks = tasks;
        });
        this.taskService.getSales()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.sale = tasks;
        });
    }
    AdministradoresComponent.prototype.ngOnInit = function () { };
    AdministradoresComponent.prototype.buy = function (id) {
        var _this = this;
        this.taskService.getTasksp(id)
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.tasks2 = tasks;
        });
    };
    AdministradoresComponent.prototype.addSale = function (event) {
        var _this = this;
        event.preventDefault();
        var newSale = {
            restaurant: 'La chinita',
            client: 'raul',
            product: this.producto,
            cantidad: parseInt(this.cantidad),
            description: this.description,
            isDone: false
        };
        this.taskService.addSales(newSale)
            .subscribe(function (task) {
            _this.sale.push(task);
            _this.cantidad = '';
            _this.description = '';
        });
    };
    AdministradoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administradores',
            template: __webpack_require__(/*! ./administradores.component.html */ "./src/app/components/administradores/administradores.component.html"),
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], AdministradoresComponent);
    return AdministradoresComponent;
}());



/***/ }),

/***/ "./src/app/components/agregar23/agregar23.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/agregar23/agregar23.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary my-2 my-sm-0\" (click)=\"buy(task._id)\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\"><span class=\"fa fa-shopping-cart\"></span> Buy</button>\n<div class=\"modal fade\" *ngFor=\"let task of tasks\" id=\"exampleModal\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Especificaciones</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <form (submit)=\"addSale($event)\">\n          <div class=\"form-group\">\n              <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"{{task.title}}\" value=\"{{task.title}}\" disabled>\n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" name=\"precio\" [(ngModel)]=\"precio\" class=\"form-control\" placeholder=\"${{task.precio}}\" value=\"{{task.precio}}\" disabled>\n          </div>    \n          <div class=\"form-group\">\n              <input type=\"text\" name=\"cantidad\" [(ngModel)]=\"cantidad\" class=\"form-control\" min=\"1\" value=\"1\">\n          </div>\n          <div class=\"form-group\">\n              <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" placeholder=\"Message\"></textarea>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n          </div>\n          </form>\n      </div>                                          \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/agregar23/agregar23.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/agregar23/agregar23.component.ts ***!
  \*************************************************************/
/*! exports provided: Agregar23Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agregar23Component", function() { return Agregar23Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Agregar23Component = /** @class */ (function () {
    function Agregar23Component(authsevice, taskService) {
        var _this = this;
        this.authsevice = authsevice;
        this.taskService = taskService;
        this.taskService.getSales()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.sale = tasks;
        });
    }
    Agregar23Component.prototype.ngOnInit = function () {
    };
    Agregar23Component.prototype.buy = function (id) {
        var _this = this;
        this.taskService.getTasksp(id)
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.tasks = tasks;
        });
    };
    Agregar23Component.prototype.addSale = function (event) {
        var _this = this;
        event.preventDefault();
        var newSale = {
            restaurant: 'La chinita',
            client: 'raul',
            product: this.producto,
            cantidad: parseInt(this.cantidad),
            description: this.description,
            isDone: false
        };
        this.taskService.addSales(newSale)
            .subscribe(function (task) {
            _this.sale.push(task);
            _this.cantidad = '';
            _this.description = '';
            _this.tasks.splice(0, 1);
        });
    };
    Agregar23Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar23',
            template: __webpack_require__(/*! ./agregar23.component.html */ "./src/app/components/agregar23/agregar23.component.html"),
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], Agregar23Component);
    return Agregar23Component;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container marg\">\n    <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <div class=\"class-md-1\">\n            <form (submit)=\"loginUser($event)\">\n              <div class=\"text-center mb-4\">  \n                <h1 class=\"h3 mb-3 font-weight-normal\">Sing up</h1>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"user\">User Name</label>\n                <input type=\"text\" name=\"user\" [(ngModel)]=\"user\" class=\"form-control\" placeholder=\"User Name\" required autofocus>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>              \n              </div>\n              \n              <div class=\"checkbox mb-3\">\n                <label>\n                  <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                </label>\n              </div>\n              <button class=\"btn btn-lg btn-dark btn-block\" type=\"submit\" value=\"Submit\">Sign in</button>\n              <p class=\"mt-3 mb-3 text-center\">&copy; 2017-2018</p>\n            </form>   \n          </div>\n        </div>\n        <div class=\"col-md-4\"></div>\n    </div>\n  </div> \n   \n\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, router) {
        var _this = this;
        this.Auth = Auth;
        this.router = router;
        this.Auth.getUser()
            .subscribe(function (auths) {
            console.log(auths);
            _this.auths = auths;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var newAuth = {
            user: this.user,
            password: this.password,
            auth: this.auth
        };
        this.Auth.addUser(newAuth)
            .subscribe(function (auth) {
            _this.auths.push(auth);
            _this.user = '';
            _this.password = '';
            _this.router.navigate(['users']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/loginusers/loginusers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/loginusers/loginusers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container marg\">\n    <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <div class=\"class-md-1\">\n            <form (submit)=\"loginUser($event)\">\n              <div class=\"text-center mb-4\">  \n                <h1 class=\"h3 mb-3 font-weight-normal\">Sing In</h1>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"user\">User Name</label>\n                <input type=\"text\" name=\"user\" [(ngModel)]=\"user\" class=\"form-control\" placeholder=\"User Name\" id=\"name\" required autofocus>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"pass\" required>              \n              </div>\n              \n              <div class=\"checkbox mb-3\">\n                <label>\n                  <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                </label>\n              </div>\n              <button class=\"btn btn-lg btn-dark btn-block\" type=\"submit\" value=\"Submit\">Sign in</button>\n              <p class=\"mt-3 mb-3 text-center\">&copy; 2017-2018</p>\n            </form>   \n          </div>\n        </div>\n        <div class=\"col-md-4\"></div>\n    </div>\n  </div> \n   \n\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/loginusers/loginusers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/loginusers/loginusers.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginusersComponent", function() { return LoginusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginusersComponent = /** @class */ (function () {
    function LoginusersComponent(auth, router, location) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.location = location;
        this.auth.getUser()
            .subscribe(function (auths) {
            console.log(auths);
            _this.auths = auths;
        });
    }
    LoginusersComponent.prototype.ngOnInit = function () {
    };
    LoginusersComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        var username = this.user;
        var userpass = this.password;
        for (var i = 0; i < this.auths.length; i++) {
            if (this.auths[i].user == username && this.auths[i].password == userpass) {
                if (this.auths[i].auth == '1') {
                    this.auth.setUser(username);
                    this.router.navigate(['admin']);
                }
                if (this.auths[i].auth == "2") {
                    this.auth.setUser(username);
                    this.router.navigate(['admin2']);
                }
                if (this.auths[i].auth == "3") {
                    this.auth.setUser(username);
                    this.router.navigate(['users']);
                    location.reload();
                }
            }
            console.log('tenes algun error');
        }
    };
    LoginusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginusers',
            template: __webpack_require__(/*! ./loginusers.component.html */ "./src/app/components/loginusers/loginusers.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LoginusersComponent);
    return LoginusersComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">OntheGo</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">Usuarios</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">administradores</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['']\">sing up admin 3 y 2</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mr-2 my-2 my-lg-0\">\n          <li class=\"nav-item\">\n              <a class=\"btn btn-outline-success \" [routerLink]=\"['signin']\">Sign In</a>\n          </li>\n        <li class=\"nav-item\">\n            <a class=\"btn btn-outline-success\" [routerLink]=\"['newuser']\">Sign up</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"container main-container\">\n      <router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" (click)=\"logoutUser()\" href=\"#\">{{user2}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    \n    <ul class=\"navbar-nav mr-auto nav nav-pills my-2 my-lg-0\" id=\"pills-tab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active my-2 my-sm-0\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Agregar</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link my-2 my-sm-0\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Productos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link my-2 my-sm-0\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">Vista</a>\n      </li>\n  </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"logoutUser()\" [routerLink]=\"['']\">Sign out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n  <div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n        <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-7\"> \n                  <div class=\"card m-3\">\n                      <div class=\"card-header\">\n                        <form (submit)=\"addTask($event)\" enctype=\"multipart/form-data\">\n                          <div class=\"form-group\">\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlFile1\"><b> upload image</b></label>\n                                <input type=\"file\" name=\"image\" [(ngModel)]=\"image\" class=\"form-control\">\n                            </div>\n                          </div>\n                          <div class=\"form-group\">\n                            <label ><b>Ingrese alimento</b></label>\n                            <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"Title\" maxlength=\"25\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label ><b>Ingrese description</b></label>\n                            <textarea name=\"description\" [(ngModel)]=\"description\" class=\"form-control\" rows=\"4\" placeholder=\"Description\"></textarea>\n                          </div>\n                          <div class=\"form-group\">\n                            <label ><b>Ingrese precio</b></label>\n                            <input type=\"text\" name=\"precio\" [(ngModel)]=\"precio\" class=\"form-control\" placeholder=\"Precio\">\n                          </div>\n                          <div class=\"form-group\">\n                            <span class=\"input-group-addon\">\n                              <button type=\"submit\" class=\"btn btn-success\">\n                                  ADD\n                              </button>\n                            </span>\n                          </div>\n                        </form>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-3\"></div>  \n            </div>\n          </div>\n    </div>\n\n    \n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-10\">           \n                <table class=\"table text-center table-hover table-responsive\">\n                  <thead>\n                    <tr>\n                      <th>Status</th>\n                      <th>Title</th>\n                      <th>Description</th>\n                      <th>Precio</th>\n                      <th>Delete</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let task of tasks\">\n                      <td class=\"pad\">\n                        <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateStatus(task)\">\n                      </td>\n                      <td class=\"pad\">{{task.title}}</td>\n                      <td class=\"pad\">{{task.description}}</td>\n                      <td class=\"pad\">${{task.precio}}</td>\n                      <td class=\"pad\">\n                        <button class=\"btn btn-danger\" (click)=\"deleteTask(task._id)\"><i class=\"fa fa-trash\"></i></button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"col-md-1\"></div>  \n        </div> \n      </div>\n    </div>\n\n\n    <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n      <app-administradores></app-administradores>\n    </div>\n    \n  </div>\n\n  \n  \n\n  <div class=\"container main-container\">\n      <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.ts ***!
  \*****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService, authsevice, router) {
        var _this = this;
        this.taskService = taskService;
        this.authsevice = authsevice;
        this.router = router;
        this.uri = 'http://localhost:3000/uploads/';
        this.attachmentList = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: this.uri });
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.authsevice.getUser()
            .subscribe(function (tasks) {
            _this.user = tasks;
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.user2 = this.authsevice.getCurrentUser();
    };
    TasksComponent.prototype.presentar = function () {
    };
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            image: this.image,
            propietario: this.user2,
            title: this.title,
            description: this.description,
            precio: parseFloat(this.precio),
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
            _this.description = '';
            _this.precio = '';
        });
    };
    TasksComponent.prototype.logoutUser = function () {
        this.authsevice.logoutUser();
        this.user2 = '';
        this.router.navigate(['']);
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var tasks_1 = this.tasks;
            this.taskService.deleteTask(id)
                .subscribe(function (data) {
                console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < tasks_1.length; i++) {
                        if (tasks_1[i]._id == id) {
                            tasks_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var newTask = {
            _id: task._id,
            title: task.title,
            description: task.description,
            precio: task.precio,
            isDone: !task.isDone
        };
        this.taskService.updateTask(newTask)
            .subscribe(function (res) {
            task.isDone = !task.isDone;
        });
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/components/tasks/tasks.component.css")],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" (click)=\"logoutUser()\" href=\"#\">{{user2}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  \n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto nav nav-pills my-2 my-lg-0\" id=\"pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active my-2 my-sm-0\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Menu</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link my-2 my-sm-0\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Promociones</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link my-2 my-sm-0\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">puntos</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link my-2 my-sm-0 navbar-toggler\" id=\"pills-restaurants-tab\" data-toggle=\"pill\" href=\"#pills-restaurants\" role=\"tab\" aria-controls=\"pills-restaurants\" aria-selected=\"false\">Restaurant</a>    \n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link my-2 my-sm-0\" id=\"pills-sale-tab\" data-toggle=\"pill\" href=\"#pills-sale\" role=\"tab\" aria-controls=\"pills-sale\" aria-selected=\"false\"><span class=\"fa fa-shopping-cart\"></span></a>    \n        </li>\n\n        \n      </ul>\n    <ul class=\"navbar-nav nav my-2 my-lg-0\">\n      <li class=\"nav-item\">\n          <a class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"logoutUser()\" [routerLink]=\"['']\">Sign out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n  <div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">  \n      <div class=\"container-fluid\">\n            <div class=\"row\">\n              <nav class=\"col-md-2 d-none d-md-block bg-light sidebar \">\n                <div class=\"sidebar-sticky\">\n                    <h4 class=\"sidebar-heading d-flex justify-content-between align-items-center mb-1 text-muted\">\n                        <span>Restaurants</span>\n                    </h4>\n                    <ul *ngFor=\"let users of auths\" class=\"navbar-nav nav my-2 my-lg-0 flex-column\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                        <span class=\"fa fa-bars\"></span> {{users.user}}\n                        </a>\n                      </li>\n                    </ul>\n                </div>\n              </nav>              \n              <main role=\"main\" class=\"col-md-7 col-lg-7 px-2\">\n                  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n                    <h1 class=\"h2\">Menu</h1>\n                  </div>\n                  <div class=\"container \">\n                    <div class=\"row\">\n                        <div *ngFor=\"let task of tasks\" class=\"card col-md-5 col-xs-5 thumb\">\n                            <div class=\"card-header btn-secondary active\">\n                                Restaurant\n                            </div>\n                            <a href=\"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" rel=\"ligthbox\">\n                                <img class=\"card-img-top d-block w-100 h-auto img-fluid\" src=\"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" alt=\"\">\n                            </a>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">{{task.title}}</h5>\n                                <p class=\"card-text\">{{task.description}}.</p>\n                            </div>\n                            <div class=\"card-footer text-right btn-secondary active\">\n                                <td class=\"pad\">${{task.precio}}</td>\n                                <td></td>\n                                <td class=\"col-sm-2\">\n                                  <button type=\"button\" class=\"btn btn-primary my-2 my-sm-0\" (click)=\"buy(task._id)\" ><span class=\"fa fa-shopping-cart\"></span> Buy</button>\n                                </td>\n                            </div>\n                        </div>\n                   </div>\n                </div>\n              </main>  \n              <nav class=\"col-sm-3 d-block sidebar \">\n                  <div class=\"sidebar-sticky\">\n                      <h4 class=\"sidebar-heading d-flex justify-content-between align-items-center mb-1 text-muted\">\n                          <span>Sales</span>\n                      </h4>\n                      <div class=\"container\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <ul class=\"list-group\">\n                                  <li class=\"list-group-item border-success d-flex justify-content-between lh-condensed\" *ngFor=\"let producto of tasks2\">\n                                    <div>\n                                      <h6 class=\"my-0\">{{producto.title}}</h6>\n                                    </div>\n                                    <span class=\"text-muted\">{{producto.precio | currency}}</span>\n                                  </li>\n                                  <li class=\"list-group-item d-flex justify-content-between\">\n                                    <span>Total (USD)</span>\n                                    <strong>$20</strong>\n                                  </li>\n                                </ul>\n                      \n                                <form class=\"card p-2\">\n                                  <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n                                    <div class=\"input-group-append\">\n                                      <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n                                    </div>\n                                  </div>\n                                </form>\n                              </div>\n                            </div>\n                      </div>\n                      \n                  </div>\n                </nav>            \n            </div>\n          </div>  \n      \n    </div>\n\n    \n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n      <app-administradores></app-administradores>\n      \n    </div>\n\n    \n\n    <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n      \n    </div>\n    <div class=\"tab-pane fade pad2\" id=\"pills-sale\" role=\"tabpanel\" aria-labelledby=\"pills-sale-tab\">\n      aqui estan las ordenes\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"pills-restaurants\" role=\"tabpanel\" aria-labelledby=\"pills-restaurants-tab\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n              <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n                  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n                    <h1 class=\"h2\">Restaurants</h1>\n                  </div>\n                  <div class=\"sidebar-sticky\">\n                      <ul *ngFor=\"let users of auths\" class=\"navbar-nav nav my-2 my-lg-0 flex-column\">\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link btn-secondary\" href=\"#\">\n                          <span class=\"fa fa-bars\"></span><h3> {{users.user}}</h3>\n                          </a>\n                        </li>\n                      </ul>\n                  </div>\n              </main>\n              \n          </div>\n        </div>  \n      </div>\n  </div>  \n\n<div class=\"container main-container\">\n    <router-outlet></router-outlet>\n</div>  \n  "

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(authsevice, taskService, router) {
        var _this = this;
        this.authsevice = authsevice;
        this.taskService = taskService;
        this.router = router;
        this.authsevice.getUserauth(2)
            .subscribe(function (users) {
            console.log(users);
            _this.auths = users;
        });
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.tasks = tasks;
        });
        this.taskService.getSales()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.sale = tasks;
        });
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.user2 = this.authsevice.getCurrentUser();
    };
    UsuariosComponent.prototype.buy = function (id) {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            console.log(tasks);
            _this.tasks2 = tasks;
        });
    };
    UsuariosComponent.prototype.addSale = function (event) {
        var _this = this;
        event.preventDefault();
        var newSale = {
            restaurant: 'La chinita',
            client: 'raul',
            product: this.producto,
            cantidad: parseInt(this.cantidad),
            description: this.description,
            isDone: false
        };
        this.taskService.addSales(newSale)
            .subscribe(function (task) {
            _this.sale.push(task);
            _this.cantidad = '';
            _this.description = '';
        });
    };
    UsuariosComponent.prototype.logoutUser = function () {
        this.authsevice.logoutUser();
        this.router.navigate(['']);
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/components/usuarios/usuarios.component.html"),
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
    }
    AuthService.prototype.getUser = function () {
        return this.http.get(this.domain + "/app/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getUserauth = function (auth) {
        return this.http.get(this.domain + "/app/users/" + auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.setUser = function (username) {
        var user_string = username;
        localStorage.setItem("currentUser", user_string);
    };
    AuthService.prototype.getCurrentUser = function () {
        var user_string = localStorage.getItem("currentUser");
        var user = user_string;
        return user;
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem("currentUser");
    };
    AuthService.prototype.addUser = function (newAuth) {
        return this.http.post(this.domain + "/app/users", newAuth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete(this.domain + "/app/users/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    //rutas para agregar alimentos por parte de los admin
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.domain + "/api/tasks")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getTasksp = function (id) {
        return this.http.get(this.domain + "/api/tasks/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getTasksn = function (propietario) {
        return this.http.get(this.domain + "/api/tasks/" + propietario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.addTask = function (newTask) {
        return this.http.post(this.domain + "/api/tasks", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.domain + "/api/tasks/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.updateTask = function (newTask) {
        return this.http.put(this.domain + "/api/tasks/" + newTask._id, newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    //rutas para agregar compra por parte de usuarios
    TaskService.prototype.getSales = function () {
        return this.http.get(this.domain + "/sal/sale")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getSalesres = function (restaurant) {
        return this.http.get(this.domain + "/sal/sale/" + restaurant)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getSalescli = function (client) {
        return this.http.get(this.domain + "/sal/sale/" + client)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.addSales = function (newTask) {
        return this.http.post(this.domain + "/sal/sale", newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.deleteSale = function (id) {
        return this.http.delete(this.domain + "/sal/sale/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.updateSale = function (newTask) {
        return this.http.put(this.domain + "/sal/sale/" + newTask._id, newTask)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\raul\Desktop\fep\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map