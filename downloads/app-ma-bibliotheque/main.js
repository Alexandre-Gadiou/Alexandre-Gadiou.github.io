(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/add-book-page/add-book-page.component */ "./src/app/pages/add-book-page/add-book-page.component.ts");
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ "./src/app/pages/not-found-page/not-found-page.component.ts");







// routes
const routes = [
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    {
        path: 'add-book',
        component: _pages_add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_3__["AddBookPageComponent"]
    },
    {
        path: '**',
        component: _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
    }
];
class AppRoutesModule {
}
AppRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutesModule });
AppRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutesModule_Factory(t) { return new (t || AppRoutesModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>',
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_add_book_form_add_book_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-book-form/add-book-form.component */ "./src/app/components/add-book-form/add-book-form.component.ts");
/* harmony import */ var _components_list_book_list_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list-book/list-book.component */ "./src/app/components/list-book/list-book.component.ts");
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-form/search-form.component */ "./src/app/components/search-form/search-form.component.ts");
/* harmony import */ var _pages_add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/add-book-page/add-book-page.component */ "./src/app/pages/add-book-page/add-book-page.component.ts");
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ "./src/app/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_confetti_confetti_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/confetti/confetti.component */ "./src/app/components/confetti/confetti.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
        _components_add_book_form_add_book_form_component__WEBPACK_IMPORTED_MODULE_7__["AddBookFormComponent"],
        _components_list_book_list_book_component__WEBPACK_IMPORTED_MODULE_8__["ListBookComponent"],
        _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__["SearchFormComponent"],
        _pages_add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_10__["AddBookPageComponent"],
        _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundPageComponent"],
        _components_confetti_confetti_component__WEBPACK_IMPORTED_MODULE_12__["ConfettiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                    _components_add_book_form_add_book_form_component__WEBPACK_IMPORTED_MODULE_7__["AddBookFormComponent"],
                    _components_list_book_list_book_component__WEBPACK_IMPORTED_MODULE_8__["ListBookComponent"],
                    _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__["SearchFormComponent"],
                    _pages_add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_10__["AddBookPageComponent"],
                    _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundPageComponent"],
                    _components_confetti_confetti_component__WEBPACK_IMPORTED_MODULE_12__["ConfettiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutesModule"]
                ],
                providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/classes/book.ts":
/*!*********************************!*\
  !*** ./src/app/classes/book.ts ***!
  \*********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
class Book {
    constructor(title, author, pages, editor) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.editor = editor;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get pages() {
        return this._pages;
    }
    set pages(value) {
        this._pages = value;
    }
    get editor() {
        return this._editor;
    }
    set editor(value) {
        this._editor = value;
    }
}


/***/ }),

/***/ "./src/app/classes/editor.ts":
/*!***********************************!*\
  !*** ./src/app/classes/editor.ts ***!
  \***********************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
var Editor;
(function (Editor) {
    Editor["hachette"] = "Hachette";
    Editor["flammarion"] = "Flammarion";
    Editor["folio"] = "Folio";
    Editor["gallimard"] = "Gallimard";
})(Editor || (Editor = {}));


/***/ }),

/***/ "./src/app/classes/sort-state.ts":
/*!***************************************!*\
  !*** ./src/app/classes/sort-state.ts ***!
  \***************************************/
/*! exports provided: SortState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return SortState; });
var SortState;
(function (SortState) {
    SortState["asc"] = "asc";
    SortState["desc"] = "desc";
    SortState["no"] = "no";
})(SortState || (SortState = {}));


/***/ }),

/***/ "./src/app/components/add-book-form/add-book-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-book-form/add-book-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddBookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookFormComponent", function() { return AddBookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_classes_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/book */ "./src/app/classes/book.ts");
/* harmony import */ var src_app_classes_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/editor */ "./src/app/classes/editor.ts");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AddBookFormComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r1[1], " ");
} }
class AddBookFormComponent {
    constructor(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this._editorOptions = [];
        this._form = new AddFormModel();
    }
    ngOnInit() {
        this.editorOptions = Object.entries(src_app_classes_editor__WEBPACK_IMPORTED_MODULE_2__["Editor"]);
    }
    submitForm() {
        let title = this.form.title;
        let author = this.form.author;
        let pages = this.form.pages;
        let editor = this.form.editor;
        let book = new src_app_classes_book__WEBPACK_IMPORTED_MODULE_1__["Book"](this.form.title, this.form.author, this.form.pages, this.form.editor);
        this.bookService.addBook(book);
        this.form = new AddFormModel();
        this.router.navigate(['/']);
    }
    get editorOptions() {
        return this._editorOptions;
    }
    set editorOptions(value) {
        this._editorOptions = value;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        this._form = value;
    }
}
AddBookFormComponent.ɵfac = function AddBookFormComponent_Factory(t) { return new (t || AddBookFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AddBookFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBookFormComponent, selectors: [["app-add-book-form"]], decls: 28, vars: 6, consts: [[1, "add-book-form"], [1, "title"], [3, "ngSubmit"], [1, "form-group"], ["for", "title", 1, "sr-only"], ["type", "text", "id", "title", "name", "title", "placeholder", "Titre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "author", 1, "sr-only"], ["type", "text", "id", "author", "name", "author", "placeholder", "Auteur", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pages", 1, "sr-only"], ["type", "number", "id", "pages", "name", "pages", "placeholder", "Nombre de pages", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "editor", 1, "sr-only"], ["id", "editor", "name", "editor", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "submit", 1, "btn", "btn-success"], ["routerLink", "/", 1, "btn", "btn-secondary"]], template: function AddBookFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ajouter un livre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddBookFormComponent_Template_form_ngSubmit_3_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.form.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Auteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.form.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.form.pages = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00C9diteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookFormComponent_Template_select_ngModelChange_19_listener($event) { return ctx.form.editor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selectionner un \u00E9diteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddBookFormComponent_option_22_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.editorOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWJvb2stZm9ybS9hZGQtYm9vay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBookFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-book-form',
                templateUrl: './add-book-form.component.html',
                styleUrls: ['./add-book-form.component.scss']
            }]
    }], function () { return [{ type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();
class AddFormModel {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get pages() {
        return this._pages;
    }
    set pages(value) {
        this._pages = value;
    }
    get editor() {
        return this._editor;
    }
    set editor(value) {
        this._editor = value;
    }
}


/***/ }),

/***/ "./src/app/components/confetti/confetti.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/confetti/confetti.component.ts ***!
  \***********************************************************/
/*! exports provided: ConfettiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfettiComponent", function() { return ConfettiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs");



class ConfettiComponent {
    constructor() { }
    ngOnInit() {
        var myCanvas = document.getElementById('my-confetti');
        let myConfetti = canvas_confetti__WEBPACK_IMPORTED_MODULE_1__["create"](myCanvas, {
            resize: true,
            useWorker: true
        });
        let duration = 15 * 1000;
        let animationEnd = Date.now() + duration;
        let timeLeft = duration;
        let skew = 1;
        requestAnimationFrame(this.doConfetti(myConfetti, duration, timeLeft, animationEnd, skew));
    }
    doConfetti(myConfetti, duration, timeLeft, animationEnd, skew) {
        let me = this;
        return () => {
            timeLeft = animationEnd - Date.now();
            skew = Math.max(0.8, skew - 0.001);
            let ticks = Math.max(200, 500 * (timeLeft / duration));
            myConfetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                gravity: 0.5,
                origin: {
                    x: Math.random(),
                    y: (Math.random() * skew) - 0.2
                },
                colors: [me.randomColor()]
            });
            //if (timeLeft > 0) {
            requestAnimationFrame(me.doConfetti(myConfetti, duration, timeLeft, animationEnd, skew));
            //}
        };
    }
    randomColor() {
        let colors = [
            '#26ccff',
            '#a25afd',
            '#ff5e7e',
            '#88ff5a',
            '#fcff42',
            '#ffa62d',
            '#ff36ff'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}
ConfettiComponent.ɵfac = function ConfettiComponent_Factory(t) { return new (t || ConfettiComponent)(); };
ConfettiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfettiComponent, selectors: [["app-confetti"]], decls: 1, vars: 0, consts: [["id", "my-confetti"]], template: function ConfettiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
    } }, styles: ["#my-confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25mZXR0aS9jb25mZXR0aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25mZXR0aS9jb25mZXR0aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteS1jb25mZXR0aXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfettiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confetti',
                templateUrl: './confetti.component.html',
                styleUrls: ['./confetti.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/list-book/list-book.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-book/list-book.component.ts ***!
  \*************************************************************/
/*! exports provided: ListBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBookComponent", function() { return ListBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../classes/sort-state */ "./src/app/classes/sort-state.ts");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a1) { return ["/book", a1]; };
function ListBookComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, b_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, b_r1.editor));
} }
class ListBookComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this._sortByTitle = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this._sortByAuthor = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this._sortByPages = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this._sortByEditor = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this.bookList = this.bookService.listAll();
        this.bookService.newDataEvent.subscribe(() => {
            this.bookList = this.bookService.listAll();
        });
        this.bookService.filterEvent.subscribe((filteredBookList) => {
            this.bookList = filteredBookList;
        });
    }
    ngOnInit() {
    }
    sortList(field) {
        switch (field) {
            case 'title': {
                let currentState = this.sortByTitle;
                this.resetSort();
                this.sortByTitle = this.toggleState(currentState);
                if (this.sortByTitle === _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc) {
                    this.bookList.sort((b1, b2) => this.compareString(b1.title, b2.title));
                }
                else {
                    this.bookList.sort((b1, b2) => -1 * this.compareString(b1.title, b2.title));
                }
                break;
            }
            case 'author': {
                let currentState = this.sortByAuthor;
                this.resetSort();
                this.sortByAuthor = this.toggleState(currentState);
                if (this.sortByAuthor === _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc) {
                    this.bookList.sort((b1, b2) => this.compareString(b1.author, b2.author));
                }
                else {
                    this.bookList.sort((b1, b2) => -1 * this.compareString(b1.author, b2.author));
                }
                break;
            }
            case 'pages': {
                let currentState = this.sortByPages;
                this.resetSort();
                this.sortByPages = this.toggleState(currentState);
                if (this.sortByPages === _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc) {
                    this.bookList.sort((b1, b2) => this.compareNumber(b1.pages, b2.pages));
                }
                else {
                    this.bookList.sort((b1, b2) => -1 * this.compareNumber(b1.pages, b2.pages));
                }
                break;
            }
            case 'editor': {
                let currentState = this.sortByEditor;
                this.resetSort();
                this.sortByEditor = this.toggleState(currentState);
                if (this.sortByEditor === _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc) {
                    this.bookList.sort((b1, b2) => this.compareString(b1.editor, b2.editor));
                }
                else {
                    this.bookList.sort((b1, b2) => -1 * this.compareString(b1.editor, b2.editor));
                }
                break;
            }
        }
    }
    resetSort() {
        this.sortByTitle = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this.sortByAuthor = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this.sortByPages = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
        this.sortByEditor = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no;
    }
    isNo(field) {
        return this.isState(field, _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no);
    }
    isAsc(field) {
        return this.isState(field, _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc);
    }
    isDesc(field) {
        return this.isState(field, _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].desc);
    }
    isState(field, state) {
        let result;
        switch (field) {
            case 'title': {
                result = this.sortByTitle === state;
                break;
            }
            case 'author': {
                result = this.sortByAuthor === state;
                break;
            }
            case 'pages': {
                result = this.sortByPages === state;
                break;
            }
            case 'editor': {
                result = this.sortByEditor === state;
                break;
            }
        }
        return result;
    }
    compareString(s1, s2) {
        if (s1 < s2) {
            return -1;
        }
        if (s1 > s2) {
            return 1;
        }
        return 0;
    }
    compareNumber(n1, n2) {
        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
        return 0;
    }
    toggleState(state) {
        let result;
        switch (state) {
            case _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc: {
                result = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].desc;
                break;
            }
            case _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].desc: {
                result = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc;
                break;
            }
            case _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].no: {
                result = _classes_sort_state__WEBPACK_IMPORTED_MODULE_1__["SortState"].asc;
                break;
            }
        }
        return result;
    }
    get bookList() {
        return this._bookList;
    }
    set bookList(value) {
        this._bookList = value;
    }
    get sortByTitle() {
        return this._sortByTitle;
    }
    set sortByTitle(value) {
        this._sortByTitle = value;
    }
    get sortByAuthor() {
        return this._sortByAuthor;
    }
    set sortByAuthor(value) {
        this._sortByAuthor = value;
    }
    get sortByPages() {
        return this._sortByPages;
    }
    set sortByPages(value) {
        this._sortByPages = value;
    }
    get sortByEditor() {
        return this._sortByEditor;
    }
    set sortByEditor(value) {
        this._sortByEditor = value;
    }
}
ListBookComponent.ɵfac = function ListBookComponent_Factory(t) { return new (t || ListBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"])); };
ListBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListBookComponent, selectors: [["app-list-book"]], decls: 20, vars: 25, consts: [[1, "list", "list-book"], [1, "table", "table-striped"], ["scope", "col", 3, "click"], [1, "fas"], [4, "ngFor", "ngForOf"], ["routerLink", "/add-book", 1, "btn", "btn-primary", "btn-add-book"], [1, "link", 3, "routerLink"]], template: function ListBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBookComponent_Template_th_click_4_listener() { return ctx.sortList("title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBookComponent_Template_th_click_7_listener() { return ctx.sortList("author"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Auteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBookComponent_Template_th_click_10_listener() { return ctx.sortList("pages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Nombre de pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListBookComponent_Template_th_click_13_listener() { return ctx.sortList("editor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00C9diteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListBookComponent_tr_17_Template, 11, 9, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ajouter un livre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-sort", ctx.isNo("title"))("fa-sort-up", ctx.isAsc("title"))("fa-sort-down", ctx.isDesc("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-sort", ctx.isNo("author"))("fa-sort-up", ctx.isAsc("author"))("fa-sort-down", ctx.isDesc("author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-sort", ctx.isNo("pages"))("fa-sort-up", ctx.isAsc("pages"))("fa-sort-down", ctx.isDesc("pages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-sort", ctx.isNo("editor"))("fa-sort-up", ctx.isAsc("editor"))("fa-sort-down", ctx.isDesc("editor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["@charset \"UTF-8\";\n.list-book[_ngcontent-%COMP%] {\n  margin-bottom: 6rem;\n}\n.list-book[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: relative;\n}\n.list-book[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.list-book[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\uF0DC\";\n  left: 1rem;\n}\n.list-book[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.list-book[_ngcontent-%COMP%]   .btn-add-book[_ngcontent-%COMP%] {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWJvb2svbGlzdC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLG1CQUFBO0FBRUo7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksZUFBQTtBQUNwQjtBQUNnQjtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNwQjtBQUlZO0VBQ0ksY0FBQTtBQUZoQjtBQU9JO0VBQ0ksV0FBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LWJvb2svbGlzdC1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtYm9vayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICAudGFibGUge1xuICAgICAgXG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmFzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXFxmMGRjXCI7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiMyMTI1Mjk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1hZGQtYm9vayB7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-book',
                templateUrl: './list-book.component.html',
                styleUrls: ['./list-book.component.scss']
            }]
    }], function () { return [{ type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search-form/search-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-form/search-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");





class SearchFormComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this._form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.form.get('search').valueChanges.subscribe(arg => {
            this.bookService.filter(this.form.get('search').value);
        });
    }
    get form() {
        return this._form;
    }
    set form(value) {
        this._form = value;
    }
}
SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) { return new (t || SearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"])); };
SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFormComponent, selectors: [["app-search-form"]], decls: 5, vars: 1, consts: [[3, "formGroup"], [1, "form-group"], ["for", "search", 1, "sr-only"], ["type", "text", "id", "search", "name", "search", "formControlName", "search", "placeholder", "Rechercher un livre", 1, "form-control"]], template: function SearchFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rechercher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-form',
                templateUrl: './search-form.component.html',
                styleUrls: ['./search-form.component.scss']
            }]
    }], function () { return [{ type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }]; }, null); })();
class SearchFormModel {
    get search() {
        return this._search;
    }
    set search(value) {
        this._search = value;
    }
}


/***/ }),

/***/ "./src/app/pages/add-book-page/add-book-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-book-page/add-book-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AddBookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookPageComponent", function() { return AddBookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_add_book_form_add_book_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-book-form/add-book-form.component */ "./src/app/components/add-book-form/add-book-form.component.ts");



class AddBookPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddBookPageComponent.ɵfac = function AddBookPageComponent_Factory(t) { return new (t || AddBookPageComponent)(); };
AddBookPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBookPageComponent, selectors: [["app-add-book-page"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "jumbotron"], [1, "display-4"]], template: function AddBookPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ma bibioth\u00E8que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-add-book-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_add_book_form_add_book_form_component__WEBPACK_IMPORTED_MODULE_1__["AddBookFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1ib29rLXBhZ2UvYWRkLWJvb2stcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBookPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-book-page',
                templateUrl: './add-book-page.component.html',
                styleUrls: ['./add-book-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-form/search-form.component */ "./src/app/components/search-form/search-form.component.ts");
/* harmony import */ var _components_list_book_list_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/list-book/list-book.component */ "./src/app/components/list-book/list-book.component.ts");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "jumbotron"], [1, "display-4"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ma bibioth\u00E8que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-list-book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__["SearchFormComponent"], _components_list_book_list_book_component__WEBPACK_IMPORTED_MODULE_2__["ListBookComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/not-found-page/not-found-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/not-found-page/not-found-page.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_confetti_confetti_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/confetti/confetti.component */ "./src/app/components/confetti/confetti.component.ts");



class NotFoundPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "jumbotron-wrapper"], [1, "text-center", "jumbotron"], [1, "display-4"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-confetti");
    } }, directives: [_components_confetti_confetti_component__WEBPACK_IMPORTED_MODULE_1__["ConfettiComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n.container[_ngcontent-%COMP%]   .jumbotron-wrapper[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtBQUFKO0FBR1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgLmp1bWJvdHJvbi13cmFwcGVyIHtcbiAgICBcbiAgICAgICAgLmp1bWJvdHJvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTs7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../classes/book */ "./src/app/classes/book.ts");



class BookService {
    constructor() {
        this.dataStore = { books: [] };
        this._newDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._filterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // uncomment to populate local storage
        //let inputData= [{"_title":"Harry Potter à l'école des sorciers ","_author":"J. K. Rowling","_pages":"500","_editor":"folio"},{"_title":"Harry Potter et la Chambre des secrets","_author":"J. K. Rowling","_pages":"750","_editor":"folio"},{"_title":"La Communauté de l'Anneau","_author":"J. R. R. Tolkien","_pages":"1000","_editor":"hachette"},{"_title":"Les Deux Tours","_author":"J. R. R. Tolkien","_pages":"1200","_editor":"gallimard"},{"_title":"Le Retour du Roi","_author":"J. R. R. Tolkien","_pages":"1500","_editor":"flammarion"},{"_title":"Harry Potter et le Prisonnier d'Azkaban ","_author":"J. K. Rowling","_pages":1000,"_editor":"folio"}]
        //localStorage.setItem('library', JSON.stringify(inputData));
        this.loadDataFromLocalStorage();
    }
    listAll() {
        return Array.from(this.dataStore.books);
    }
    addBook(b) {
        this.dataStore.books.push(b);
        this.updateLocalStorage();
        this.notifyAll();
    }
    filter(term) {
        let filter = this.listAll();
        if (term) {
            filter = this.listAll().filter((b) => {
                return b.title.toLowerCase().includes(term.toLowerCase())
                    || b.author.toLowerCase().includes(term.toLowerCase())
                    || b.pages.toString().includes(term.toLowerCase())
                    || b.editor.toLowerCase().includes(term.toLowerCase());
            });
        }
        this.filterEvent.emit(filter);
    }
    loadDataFromLocalStorage() {
        this.dataStore.books = [];
        let memory = JSON.parse(localStorage.getItem('library'));
        for (const b of memory) {
            let mb = new _classes_book__WEBPACK_IMPORTED_MODULE_1__["Book"](b["_title"], b["_author"], new Number(b["_pages"]), b["_editor"]);
            this.dataStore.books.push(mb);
        }
    }
    updateLocalStorage() {
        localStorage.setItem('library', JSON.stringify(this.dataStore.books));
    }
    notifyAll() {
        this.newDataEvent.emit();
    }
    get newDataEvent() {
        return this._newDataEvent;
    }
    set newDataEvent(value) {
        this._newDataEvent = value;
    }
    get filterEvent() {
        return this._filterEvent;
    }
    set filterEvent(value) {
        this._filterEvent = value;
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Alex/Documents/Administration/09-Entreprises/Covea/Formations/02 - Angular Niveau 1/ma-bibliotheque/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map