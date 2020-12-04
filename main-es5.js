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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-lg bg-transparent fixed-top p-0\" *ngIf=\"router.url !== '/home'\">\n    <button class=\"navbar-toggler border-0\" type=\"button\" (click)=\"toggleNavbar()\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand ml-4 py-3\" href=\"home\">\n        <img src=\"../assets/img/the-challenge-logo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top mr-1\" alt=\"The Challenge - Logo\">\n        The Challenge\n    </a>\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n        <ul class=\"navbar-nav text-claro ml-auto\">\n            <li><a [routerLink]=\"['/explorar']\" routerLinkActive=\"active\" class=\"nav-link\">Explorar</a></li>\n            <li><a [routerLink]=\"['/filmes']\" routerLinkActive=\"active\" class=\"nav-link\">Filmes</a></li>\n            <li><a routerLink=\"#\" class=\"nav-link\">Séries</a></li>\n            <li><a routerLink=\"#\" class=\"nav-link\">Atores</a></li>\n        </ul>\n    </div>\n</nav>\n<div *ngIf=\"router.url !== '/home'\" style=\"margin-top: 7rem;\"></div>\n<router-outlet></router-outlet>\n<footer *ngIf=\"router.url !== '/home'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <span class=\"text-secondary p-1 mx-auto\">© 2020 The Challenge - Feito com <span alt=\"amor\" name=\"amor\">&#10084;</span> por Yuri Eduardo.</span>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/filmes/filmes.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filmes/filmes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\" *ngIf=\"isLoading\"></div>\n<section id=\"scroll-top\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <header>\n                <h1 class=\"display-4\">Descubra novos filmes</h1>\n                <h4>Explorando por:</h4>\n            </header>\n        </div>\n    </div>\n</section>\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" name=\"customRadioInline1\" class=\"custom-control-input\" checked>\n                <label class=\"custom-control-label\" for=\"customRadioInline1\">Filmes</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <a [routerLink]=\"['/series']\">\n                    <input type=\"radio\" name=\"customRadioInline1\" class=\"custom-control-input\">\n                    <label class=\"custom-control-label\" for=\"customRadioInline2\">Séries</label>\n                </a>\n            </div>\n        </div>\n        <app-filter (filterChange)=\"changeSelection($event)\"></app-filter>\n    </div>\n</section>\n<main role=\"main\" class=\"mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"card-columns\">\n            <div class=\"card border-0 position-relative\" *ngFor=\"let movie of itemList\" (click)=\"goToMovieDetails(movie)\">\n              <img [src]=\"movie.backdrop_path\" class=\"card-img-top\" [alt]=\"movie.title\">\n              <div class=\"card-body position-absolute\">\n                <h5 class=\"card-title\">{{ movie.title }}</h5>\n                <p class=\"card-text\">{{ movie.overview }}</p>\n                <div class=\"card-footer pl-0\">\n                    <span>Mais informações</span>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n    <pagination [pager]=\"pager\" (changePage)=\"changePage($event)\"></pagination>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <header class=\"hero d-flex vw-100 vh-100 position-relative min-vw-100 min-vh-100\">\n    <div class=\"container\">\n      <div class=\"row mb-4\">\n        <a class=\"mx-auto\" routerLink=\"#\">\n          <img src=\"../../assets/img/the-challenge-logo.svg\" alt=\"The Challenge - Logo\">\n        </a>\n        <h1 class=\"display-1 text-light mx-auto mt-3 mt-sm-0\">The Challenge</h1>\n      </div>\n      <nav>\n        <div class=\"row mt-5\">\n          <ul class=\"navbar-nav flex-row text-claro\">\n            <li><a routerLink=\"/explorar\" class=\"nav-link\">Explorar</a></li>\n            <li><a routerLink=\"/filmes\" class=\"nav-link\">Filmes</a></li>\n            <li><a routerLink=\"/\" class=\"nav-link\">Séries</a></li>\n            <li><a routerLink=\"/\" class=\"nav-link\">Atores</a></li>\n          </ul>\n          <div id=\"search\" class=\"col-12\" routerLink=\"/search\">\n            <form class=\"form-inline pl-0 pl-sm-3\">\n              <input class=\"mx-auto pt-0 py-sm-2 col bg-transparent font-weight-lighter border-0 text-claro\" type=\"search\" placeholder=\"Buscar filme, série ou ator...\">\n              <button class=\"py-4 py-sm-4 border-0 shadow-none mx-auto\" type=\"submit\">Pesquisar</button>\n            </form>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-details/TrailerDialogModal.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-details/TrailerDialogModal.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\">\n    <button mat-button mat-dialog-close class=\"close-button\"><mat-icon>clear</mat-icon></button>\n    <iframe width=\"720\" height=\"420\" [src]=\"data.videoUrl\" frameborder=\"0\" allowfullscreen></iframe>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-details/movie-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" style=\"margin-top: -7rem\">\n  <div class=\"hero d-flex\">\n    <div class=\"hero-overlay\" [style.background-image]=\"'url(' + movie.backdrop_path + ')'\"></div>\n    <div class=\"container-fluid mx-5\">\n      <div class=\"row\">\n        <div class=\"movie-cover col-4\" [style.background-image]=\"'url(' + movie.backdrop_path + ')'\"></div>\n        <header class=\"col ml-3\">\n          <h1 class=\"font-weight-lighter\">{{ movie.title }}</h1>\n          <ul class=\"list-group list-group-horizontal\">\n            <li class=\"list-group-item bg-transparent border-0 p-0\"><span class=\"badge badge-primary badge-pill\">{{ movie.release_date | date: 'y'}}</span></li>\n            <li class=\"list-group-item bg-transparent border-0 py-0\"><span class=\"badge badge-primary badge-pill\">{{ movie.runtime }} min.</span></li>\n            <li class=\"list-group-item bg-transparent border-0 py-0 pl-0\"><span class=\"badge badge-primary badge-pill\"><span class=\"font-weight-lighter\">&#9733;</span> {{ movie.vote_average }}</span></li>\n            <li class=\"list-group-item bg-transparent border-0 p-0\"><span class=\"badge badge-primary badge-pill mr-1\" *ngFor=\"let genre of movie.genres\"> {{ genre.name }}</span></li>\n          </ul>\n          <h4 class=\"mt-4\">Sinopse</h4>\n          <p>{{movie.overview}}</p>\n\n          <div *ngIf=\"movie\" class=\"movie-details\">\n              <mat-tab-group (selectedIndexChange)=\"selectChange($event)\">\n                <mat-tab label=\"Estrelando\">\n                    <div *ngFor=\"let cast of movie.cast;  let i=index\">\n                        <div *ngIf=\"i<5\" style=\"flex-direction: row;display: flex;\"> \n                          <div [style.background-image]=\"'url(' + cast.imgUrl + ')'\" class=\"cast-header-image rounded-circle\" style=\"border: 1px solid white !important;\"></div>\n                          <span class=\"ml-2\" style=\"line-height: 2.3rem;\">{{ cast.name }} <small> como {{ cast.character }}</small></span>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Trailers\">\n                  <mat-progress-spinner\n                    color=\"primary\"\n                    mode=\"indeterminate\"\n                    *ngIf=\"!movie.videos\">\n                  </mat-progress-spinner>\n                  <a\n                    *ngFor=\"let video of movie.videos\"\n                    [title]=\"video.name\"\n                    class=\"movie-trailers ng-lazyloaded\"\n                    (click)=\"openDialog(video)\"\n                    [style.background-image]=\"'url(' + video.imgUrl + ')'\"\n                  >\n                  </a>\n                </mat-tab>\n                <mat-tab label=\"Reviews\">\n                  <p *ngIf=\"movie.reviews && movie.reviews.length == 0\"></p>\n                  <mat-progress-spinner\n                    color=\"primary\"\n                    mode=\"indeterminate\"\n                    *ngIf=\"!movie.reviews\"\n                  >\n                  </mat-progress-spinner>\n                  <div *ngFor=\"let review of movie.reviews\">\n                    <h4>{{ review.author }}</h4>\n                    <p>{{ review.content }}</p>\n                    <hr />\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Similar Movies\">\n                  <p *ngIf=\"movie.similarMovies && movie.similarMovies.length == 0\">\n                    \n                  </p>\n                  <mat-progress-spinner\n                    color=\"primary\"\n                    mode=\"indeterminate\"\n                    *ngIf=\"!movie.similarMovies\"\n                  >\n                  </mat-progress-spinner>\n                  <div class=\"similar-movies\">\n                    <div\n                      *ngFor=\"let sm of movie.similarMovies\"\n                      class=\"item\"\n                      (click)=\"goToMovieDetails(sm)\"\n                    >\n                      <div\n                        class=\"s-movie ng-lazyloaded\"\n                        [style.background-image]=\"'url(' + sm.poster_path + ')'\"\n                      ></div>\n                    </div>\n                  </div>\n                </mat-tab>\n              </mat-tab-group>\n            </div>\n        </header>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\" *ngIf=\"isLoading\"></div>\n<main role=\"main\" class=\"mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n          <div id=\"search\" class=\"col-12\">\n            <form class=\"form-inline pl-0 pl-sm-3\">\n              <input (keyup)=\"$search.next($event.target.value)\" class=\"mx-auto py-3 col bg-transparent font-weight-lighter border-0 text-claro\" type=\"search\" placeholder=\"Buscar filme, série ou ator...\">\n            </form>\n          </div>\n      <div class=\"card-columns mt-3\">\n          <div class=\"card border-0 position-relative\" *ngFor=\"let movie of itemList\" (click)=\"goToMovieDetails(movie)\">\n            <img [src]=\"movie.backdrop_path\" class=\"card-img-top\" [alt]=\"movie.title\">\n            <div class=\"card-body position-absolute\">\n              <h5 class=\"card-title\">{{ movie.title }}</h5>\n              <p class=\"card-text\">{{ movie.overview }}</p>\n              <div class=\"card-footer pl-0\">\n                  <span>Mais informações</span>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/filter/filter.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/filter/filter.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"discover-filters\">\n  <mat-form-field role=\"form\" class=\"col\">\n    <mat-select role=\"list\" [(ngModel)]=\"options.primary_release_year\" placeholder=\"Ano\" (selectionChange)=\"changeSelection()\">\n      <mat-option role=\"option\" *ngFor=\"let year of yearsList\" [value]=\"year\">{{year}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"col\">\n    <mat-select role=\"list\" [(ngModel)]=\"options.sort_by\" placeholder=\"Ordernar por\" (selectionChange)=\"changeSelection()\">\n      <mat-option role=\"option\" *ngFor=\"let sort of sortByList\" [value]=\"sort.key\">{{sort.value}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"col\">\n    <mat-select role=\"list\" multiple [(ngModel)]=\"options.with_genres\" placeholder=\"Gêneros\" (selectionChange)=\"changeSelection()\">\n      <mat-option role=\"option\" *ngFor=\"let genres of genresList\" [value]=\"genres.id\">{{genres.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"my-5\">\n    <ul class=\"pagination pagination-lg justify-content-center text-primary\">\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" title=\"Primeira\">\n            <a class=\"page-link\" (click)=\"setPage(1)\">\n                <span style=\"font-size: 1.9rem;line-height: 1rem;\">&laquo;</span>\n            </a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" title=\"Anterior\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">\n                Anterior\n            </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a class=\"page-link\" style=\"background-color: rgb(243, 243, 243);\">\n                {{ pager.currentPage }}\n            </a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" title=\"Próxima\">\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">\n                Próxima\n            </a>\n        </li>\n    </ul>\n</aside>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filmes/filmes.component */ "./src/app/filmes/filmes.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'explorar', component: _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_4__["FilmesComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'filmes', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'movie/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\nfooter span {\n  font-size: 0.7rem;\n}\n\n.navbar-brand {\n  background: linear-gradient(to right, #85C2FF 0%, #B0EBFF 100%);\n  background-clip: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.navbar-expand-lg ul li {\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center;\n}\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  padding: 1rem 2rem;\n}\n\nnav.navbar-dark ul li a.nav-link:hover,\n#search:focus-within {\n  background-color: rgba(0, 0, 0, 0.2) !important;\n}\n\nnav::before {\n  background-image: url('background-body.jpg');\n  background-size: cover;\n  -webkit-filter: blur(15px) brightness(0.7);\n  filter: blur(15px) brightness(0.7);\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -2;\n  opacity: 0.9;\n  background-position: 50% 12%;\n}\n\n.navbar-dark .navbar-nav .nav-link.active {\n  color: var(--claro);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n}\n\n@media only screen and (max-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding: 0.5rem 1.5rem;\n    text-align: left;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNUEpDT01QVVRBRE9SRVNcXERlc2t0b3BcXHRoZS1jaGFsbGVuZ2UtbWFzdGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksK0RBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBOztFQUVJLCtDQUFBO0FDTUo7O0FESkE7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7RUFDQSxpREFBQTtBQ1FKOztBRE5BO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0NBQUE7RUNTTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cbmZvb3RlciBzcGFuIHtcbiAgICBmb250LXNpemU6IC43cmVtO1xufVxuLm5hdmJhci1icmFuZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjODVDMkZGIDAlLCAjQjBFQkZGIDEwMCUpO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1leHBhbmQtbGcgdWwgbGkge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cbm5hdi5uYXZiYXItZGFyayB1bCBsaSBhLm5hdi1saW5rOmhvdmVyLFxuI3NlYXJjaDpmb2N1cy13aXRoaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjIpICFpbXBvcnRhbnQ7XG59XG5uYXY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2JhY2tncm91bmQtYm9keS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpIGJyaWdodG5lc3MoMC43KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTVweCkgYnJpZ2h0bmVzcygwLjcpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAtMjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEyJTtcbn1cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tY2xhcm8pO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC42KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xuICAgIH1cbn0iLCIqIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuZm9vdGVyIHNwYW4ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg1QzJGRiAwJSwgI0IwRUJGRiAxMDAlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIHVsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbm5hdi5uYXZiYXItZGFyayB1bCBsaSBhLm5hdi1saW5rOmhvdmVyLFxuI3NlYXJjaDpmb2N1cy13aXRoaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcbn1cblxubmF2OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL2JhY2tncm91bmQtYm9keS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpIGJyaWdodG5lc3MoMC43KTtcbiAgZmlsdGVyOiBibHVyKDE1cHgpIGJyaWdodG5lc3MoMC43KTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMjtcbiAgb3BhY2l0eTogMC45O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTIlO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jbGFybyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/filter/filter.component */ "./src/app/shared/filter/filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filmes/filmes.component */ "./src/app/filmes/filmes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_sw_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/sw.service */ "./src/app/services/sw.service.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");



















var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false },
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailsComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__["TrailerDialogComponent"],
                _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_11__["FilmesComponent"],
                _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('/the-challenge/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                }),
            ],
            providers: [
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig },
                _services_movie_db_service__WEBPACK_IMPORTED_MODULE_9__["MovieDBService"],
                _services_sw_service__WEBPACK_IMPORTED_MODULE_15__["SwService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
            entryComponents: [_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__["TrailerDialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filmes/filmes.component.css":
/*!*********************************************!*\
  !*** ./src/app/filmes/filmes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-radio label,\n.custom-radio a {\n    color: var(--claro);\n    cursor: pointer;\n}\n.custom-control-input:checked ~ .custom-control-label {\n    color: var(--azul);\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: var(--azul);\n    background-color: var(--azul);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbWVzL2ZpbG1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZmlsbWVzL2ZpbG1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1yYWRpbyBsYWJlbCxcbi5jdXN0b20tcmFkaW8gYSB7XG4gICAgY29sb3I6IHZhcigtLWNsYXJvKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWF6dWwpO1xufVxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1henVsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/filmes/filmes.component.ts":
/*!********************************************!*\
  !*** ./src/app/filmes/filmes.component.ts ***!
  \********************************************/
/*! exports provided: FilmesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmesComponent", function() { return FilmesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var ng_animate_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-animate-scroll */ "./node_modules/ng-animate-scroll/fesm5/ng-animate-scroll.js");







var FilmesComponent = /** @class */ (function () {
    function FilmesComponent(animateScrollService, titleService, DBService, router) {
        this.animateScrollService = animateScrollService;
        this.titleService = titleService;
        this.DBService = DBService;
        this.router = router;
        this.defaultImage = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].placeholderImg;
        this.options = { page: 1 };
        this.pager = { currentPage: 1, totalPages: 0, totalPaginas: 0 };
        this.isLoading = false;
        this.getDiscover(this.options);
        this.titleService.setTitle('Descubra novos filmes');
    }
    FilmesComponent.prototype.ngOnInit = function () { };
    FilmesComponent.prototype.getDiscover = function (options) {
        var _this = this;
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.DBService.getDiscover('movie', options).subscribe(function (res) {
            _this.pager.totalPages = res.total_pages;
            _this.isLoading = false;
            _this.itemList = _this.DBService.formatMovies(res.results);
            setTimeout(function () {
                _this.animateScrollService.scrollToElement('scroll-top', 900);
            }, 300);
        }, function (error) {
            _this.isLoading = false;
        });
    };
    FilmesComponent.prototype.changeSelection = function (options) {
        this.pager.currentPage = 1;
        options.page = 1;
        this.getDiscover(options);
    };
    FilmesComponent.prototype.like = function (e, movie) {
        e.stopPropagation();
        alert(movie.title);
    };
    FilmesComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    FilmesComponent.prototype.changePage = function (pageno) {
        this.pager.currentPage = pageno;
        this.options.page = pageno;
        this.getDiscover(this.options);
    };
    FilmesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filmes',
            template: __webpack_require__(/*! raw-loader!./filmes.component.html */ "./node_modules/raw-loader/index.js!./src/app/filmes/filmes.component.html"),
            styles: [__webpack_require__(/*! ./filmes.component.css */ "./src/app/filmes/filmes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_animate_scroll__WEBPACK_IMPORTED_MODULE_6__["NgAnimateScrollService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_movie_db_service__WEBPACK_IMPORTED_MODULE_5__["MovieDBService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FilmesComponent);
    return FilmesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\nheader.hero h1.display-1 {\n    background: linear-gradient(to right, #85C2FF 0%, #B0EBFF 100%);\n    background-clip: border-box;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\nheader.hero img {\n    max-width: 90%;\n    margin-top: -15px;\n}\nheader.hero ul li {\n    display: grid;\n    align-content: center;\n}\nheader.hero ul li a.nav-link {\n    padding: 1rem 1.3rem;\n}\nheader.hero ul li a.nav-link:hover {\n    background-color: rgba(0,0,0,.2);\n}\n.hero {\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n.hero::before {\n    background-image: url('background-body.jpg');\n    background-size: cover;\n    -webkit-filter: blur(15px) brightness(0.7);\n    filter: blur(15px) brightness(0.7);\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -2;\n    opacity: 0.9;\n}\n@media only screen and (max-width: 576px) {\n    header.hero ul li a.nav-link {\n        padding: 1rem .7rem;\n        font-size: 1rem;\n        letter-spacing: 2px;\n    }\n        header.hero h1.display-1 {\n            font-size: 4rem;\n            line-height: 1.3;\n            text-align: center;\n        }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw0Q0FBNkQ7SUFDN0Qsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO1FBQ0k7WUFDSSxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtRQUN0QjtBQUNSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuaGVhZGVyLmhlcm8gaDEuZGlzcGxheS0xIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4NUMyRkYgMCUsICNCMEVCRkYgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmhlYWRlci5oZXJvIGltZyB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5oZWFkZXIuaGVybyB1bCBsaSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5oZWFkZXIuaGVybyB1bCBsaSBhLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAxcmVtIDEuM3JlbTtcbn1cbmhlYWRlci5oZXJvIHVsIGxpIGEubmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xufVxuLmhlcm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmhlcm86OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtYm9keS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpIGJyaWdodG5lc3MoMC43KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTVweCkgYnJpZ2h0bmVzcygwLjcpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAtMjtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgaGVhZGVyLmhlcm8gdWwgbGkgYS5uYXYtbGluayB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjdyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG4gICAgICAgIGhlYWRlci5oZXJvIGgxLmRpc3BsYXktMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  height: calc(100vh - 25px);\n  z-index: -2;\n}\n\n.hero-overlay {\n  background-position: center left;\n  background-repeat: no-repeat;\n  background-size: 150%;\n  -webkit-filter: blur(15px) brightness(0.4);\n  filter: blur(15px) brightness(0.4);\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.movie-cover {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 80vh;\n  box-shadow: 0px 0px 15px 0px #000000;\n}\n\n.container-fluid > .row {\n  margin-top: 13vh;\n  overflow: hidden;\n}\n\n.badge-primary {\n  background-color: var(--azul);\n}\n\n.cast-header-image {\n  width: 38px;\n  height: 38px;\n  z-index: 20;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: all 0.3s ease;\n}\n\n.cast-header-image:hover {\n  width: 80px !important;\n  height: 80px !important;\n  cursor: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9DOlxcVXNlcnNcXE1QSkNPTVBVVEFET1JFU1xcRGVza3RvcFxcdGhlLWNoYWxsZW5nZS1tYXN0ZXIvc3JjXFxhcHBcXG1vdmllLWRldGFpbHNcXG1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLDZCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ01KOztBREpBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXB4KTtcbiAgICB6LWluZGV4OiAtMjtcbn1cbi5oZXJvLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE1cHgpIGJyaWdodG5lc3MoMC40KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTVweCkgYnJpZ2h0bmVzcygwLjQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG4ubW92aWUtY292ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogODB2aDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzAwMDAwMDsgXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjMDAwMDAwO1xufVxuLmNvbnRhaW5lci1mbHVpZCA+IC5yb3cge1xuICAgIG1hcmdpbi10b3A6IDEzdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYWRnZS1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcbn1cbi5jYXN0LWhlYWRlci1pbWFnZSB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jYXN0LWhlYWRlci1pbWFnZTpob3ZlciB7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IG5vbmU7XG59IiwiLmhlcm8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXB4KTtcbiAgei1pbmRleDogLTI7XG59XG5cbi5oZXJvLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigxNXB4KSBicmlnaHRuZXNzKDAuNCk7XG4gIGZpbHRlcjogYmx1cigxNXB4KSBicmlnaHRuZXNzKDAuNCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tb3ZpZS1jb3ZlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogODB2aDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzAwMDAwMDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCA+IC5yb3cge1xuICBtYXJnaW4tdG9wOiAxM3ZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFkZ2UtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xufVxuXG4uY2FzdC1oZWFkZXItaW1hZ2Uge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uY2FzdC1oZWFkZXItaW1hZ2U6aG92ZXIge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent, TrailerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerDialogComponent", function() { return TrailerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/movie-db.service */ "./src/app/services/movie-db.service.ts");








var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, dbService, dialog, domSanitizer, titleService, location, router) {
        var _this = this;
        this.route = route;
        this.dbService = dbService;
        this.dialog = dialog;
        this.domSanitizer = domSanitizer;
        this.titleService = titleService;
        this.location = location;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.route.params.subscribe(function (params) {
            _this.movieId = params['id'];
            _this.getMovieDetails(_this.movieId);
        });
    }
    MovieDetailsComponent.prototype.ngOnInit = function () { };
    MovieDetailsComponent.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.dbService.getMovieDetails(id).subscribe(function (res) {
            _this.movie = res;
            _this.getCast();
            _this.titleService.setTitle(res.title);
            _this.movie.poster_path = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imgUrl + _this.movie.poster_path;
            _this.movie.backdrop_path = "https://image.tmdb.org/t/p/original" + _this.movie.backdrop_path;
        });
    };
    MovieDetailsComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    MovieDetailsComponent.prototype.getCast = function () {
        var _this = this;
        this.dbService.getCastMovie(this.movieId).subscribe(function (res) {
            _this.movie.cast = res['cast'].slice(0, 10).map(function (cast) {
                cast.imgUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imgUrl + cast.profile_path;
                return cast;
            });
        });
    };
    MovieDetailsComponent.prototype.getMovieVideos = function () {
        var _this = this;
        if (this.movie.videos && this.movie.videos.length) {
            return;
        }
        this.dbService.getMovieVideos(this.movieId).subscribe(function (res) {
            _this.movie.videos = res.results.map(function (video) {
                video.imgUrl = "https://img.youtube.com/vi/" + video.key + "/0.jpg";
                video.url = "https://www.youtube.com/watch?v=" + video.key;
                return video;
            });
        });
    };
    MovieDetailsComponent.prototype.getMovieReviews = function () {
        var _this = this;
        if (this.movie.reviews && this.movie.reviews.length) {
            return;
        }
        this.dbService.getMovieReviews(this.movieId).subscribe(function (res) {
            _this.movie.reviews = res.results || [];
        });
    };
    MovieDetailsComponent.prototype.similarMovies = function () {
        var _this = this;
        if (this.movie.similarMovies && this.movie.similarMovies.length) {
            return;
        }
        if (this.movieId) {
            this.dbService.getSimilarMovies(this.movieId).subscribe(function (res) {
                _this.movie.similarMovies = _this.dbService.formatMovies(res.results);
            });
        }
    };
    MovieDetailsComponent.prototype.selectChange = function (event) {
        if (event === 1) {
            this.getMovieVideos();
        }
        else if (event === 2) {
            this.getMovieReviews();
        }
        else if (event === 3) {
            this.similarMovies();
        }
    };
    MovieDetailsComponent.prototype.openDialog = function (video) {
        var videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?autoplay=1");
        var dialogRef = this.dialog.open(TrailerDialogComponent, {
            data: { videoUrl: videoUrl }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    /*openShare(video) {
      const width = window.innerWidth > 720 ? '50%' : '90%';
      const dialogRef = this.dialog.open(SocialShareComponent, {
        data: { movie: this.movie },
        width: width,
        height: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }*/
    MovieDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/movie-details/movie-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_movie_db_service__WEBPACK_IMPORTED_MODULE_7__["MovieDBService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());

var TrailerDialogComponent = /** @class */ (function () {
    function TrailerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TrailerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'trailer-modal-dialog',
            template: __webpack_require__(/*! raw-loader!./TrailerDialogModal.html */ "./node_modules/raw-loader/index.js!./src/app/movie-details/TrailerDialogModal.html"),
            styles: ["\n      .close-button {\n        position: absolute;\n        top: -30px;\n        right: -24px;\n        padding: 0;\n        min-width: 40px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TrailerDialogComponent);
    return TrailerDialogComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 576px) {\n  #search input {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcTVBKQ09NUFVUQURPUkVTXFxEZXNrdG9wXFx0aGUtY2hhbGxlbmdlLW1hc3Rlci9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAjc2VhcmNoIGlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAjc2VhcmNoIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var SearchComponent = /** @class */ (function () {
    function SearchComponent(DBService, router, titleService) {
        this.DBService = DBService;
        this.router = router;
        this.titleService = titleService;
        this.defaultImage = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].placeholderImg;
        this.isLoading = false;
        this.$search = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Buscar filme, série ou ator...');
        this.getDiscover();
        this.$search
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300))
            .subscribe(function (respostaComDelay) {
            if (!respostaComDelay.length) {
                _this.getDiscover();
            }
            if (respostaComDelay.length > 2) {
                _this.getMovies(respostaComDelay);
            }
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    SearchComponent.prototype.getMovies = function (value) {
        var _this = this;
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.DBService.getkeywords(this.search = value)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.itemList = _this.DBService.formatMovies(res.results);
        }, function () { return _this.isLoading = false; });
    };
    SearchComponent.prototype.getDiscover = function () {
        var _this = this;
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.DBService.getDiscover('movie', { page: 1 })
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.itemList = _this.DBService.formatMovies(res.results);
        }, function () { return _this.isLoading = false; });
    };
    SearchComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_db_service__WEBPACK_IMPORTED_MODULE_5__["MovieDBService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/movie-db.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/movie-db.service.ts ***!
  \**********************************************/
/*! exports provided: MovieDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDBService", function() { return MovieDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var MovieDBService = /** @class */ (function () {
    function MovieDBService(http) {
        this.http = http;
        this.API_BASE = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_BASE;
        this.API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_KEY;
    }
    MovieDBService.prototype.formatParams = function (options) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('api_key', this.API_KEY)
            .set('language', 'pt-BR');
        if (options) {
            Object.keys(options).forEach(function (key) {
                params = params.append(key, options[key]);
            });
        }
        return { params: params };
    };
    MovieDBService.prototype.sortByList = function () {
        return [
            { key: 'popularity.desc', value: 'Popularidade decrescente' },
            { key: 'popularity.asc', value: 'Popularidade crescente' },
            { key: 'vote_count.asc', value: 'Avaliação crescente' },
            { key: 'vote_count.desc', value: 'Avaliação decrescente' },
            { key: 'primary_release_date.desc', value: 'Data de lançamento decrescente' },
            { key: 'primary_release_date.asc', value: 'Data de lançamento crescente' }
        ];
    };
    MovieDBService.prototype.getYears = function () {
        var year = new Date().getFullYear();
        var yearList = [];
        for (var i = 0; i < 25; i++) {
            yearList.push(year - i);
        }
        return yearList;
    };
    MovieDBService.prototype.getMovies = function (type) {
        type = type || 'popular';
        return this.http
            .get(this.API_BASE + "movie/" + type, this.formatParams({}))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieDetails = function (movieId) {
        var movieDetilasUrl = this.API_BASE + "movie/" + movieId;
        return this.http.get(movieDetilasUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieVideos = function (movieId) {
        var movieTrailersUrl = this.API_BASE + "movie/" + movieId + "/videos";
        return this.http.get(movieTrailersUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieReviews = function (movieId) {
        var movieReviewUrl = this.API_BASE + "movie/" + movieId + "/reviews";
        return this.http.get(movieReviewUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getGenres = function () {
        var generesUrl = this.API_BASE + "genre/movie/list";
        return this.http.get(generesUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getkeywords = function (search) {
        var generesUrl = this.API_BASE + "search/movie?api_key=" + this.API_KEY + "&query=" + search + "&page=1";
        return this.http.get(generesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.formatMovies = function (items) {
        var placeholderImg = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].placeholderImg;
        var imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imgUrl;
        return items.map(function (item) {
            if (item) {
                item.poster_path = item.poster_path
                    ? "" + imgUrl + item.poster_path
                    : placeholderImg;
                item.backdrop_path = item.backdrop_path
                    ? "" + imgUrl + item.backdrop_path
                    : placeholderImg;
                item.overview = item.overview.substr(0, 200) + '...';
                return item;
            }
        });
    };
    MovieDBService.prototype.getSimilarMovies = function (movie_id) {
        var similarMovieUrl = this.API_BASE + "movie/" + movie_id + "/similar";
        return this.http.get(similarMovieUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getCastMovie = function (movie_id) {
        var castUrl = this.API_BASE + "movie/" + movie_id + "/credits?api_key=" + this.API_KEY;
        return this.http.get(castUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getDiscover = function (type, options) {
        // options.api_key = this.API_KEY;
        var discoverUrl = this.API_BASE + "discover/" + type;
        return this.http.get(discoverUrl, this.formatParams(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            this.body = error || '';
            this.err = this.body.error || JSON.stringify(this.body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + this.err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    MovieDBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieDBService);
    return MovieDBService;
}());



/***/ }),

/***/ "./src/app/services/sw.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/sw.service.ts ***!
  \****************************************/
/*! exports provided: SwService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwService", function() { return SwService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");




function promptUser(event) {
    return true;
}
var SwService = /** @class */ (function () {
    function SwService(updates) {
        // log sw updates
        updates.available.subscribe(function (event) {
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        updates.activated.subscribe(function (event) {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
        // check for updates
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(6 * 60 * 60).subscribe(function () { return updates.checkForUpdate(); });
        // reload the app after updates
        updates.available.subscribe(function (event) {
            if (promptUser(event)) {
                updates.activateUpdate().then(function () { return document.location.reload(); });
            }
        });
    }
    SwService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]])
    ], SwService);
    return SwService;
}());



/***/ }),

/***/ "./src/app/shared/filter/filter.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/filter/filter.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".discover-filters{\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 10px 5px;\n    flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjb3Zlci1maWx0ZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/filter/filter.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/filter/filter.component.ts ***!
  \***************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movie-db.service */ "./src/app/services/movie-db.service.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent(DBService) {
        var _this = this;
        this.DBService = DBService;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.DBService.getGenres().subscribe(function (res) { return (_this.genresList = res.genres); });
        this.options = {};
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.yearsList = this.DBService.getYears();
        this.sortByList = this.DBService.sortByList();
    };
    FilterComponent.prototype.changeSelection = function () {
        this.filterChange.emit(this.options);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "filterChange", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/shared/filter/filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_db_service__WEBPACK_IMPORTED_MODULE_2__["MovieDBService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    -ms-user-select: none;\n        user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\nli a {\n    color: var(--azul);\n    cursor: pointer;\n}\nli a:hover {\n    color: var(--azulesc);\n}\n.disabled {\n    cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQWlCO1FBQWpCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxubGkgYSB7XG4gICAgY29sb3I6IHZhcigtLWF6dWwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1henVsZXNjKTtcbn1cbi5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.setPage = function (page) {
        if (page <= 0) {
            page = 1;
        }
        else if (page > this.pager.totalPages) {
            return;
        }
        this.changePage.emit(page);
    };
    PaginationComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "pager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]
            ],
            providers: [],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
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
    production: false,
    placeholderImg: "../assets/img/no-image.png?text=the-challenge",
    imgUrl: "https://image.tmdb.org/t/p/w500",
    API_BASE: 'https://api.themoviedb.org/3/',
    API_KEY: '5838a46763aeb076b4fdf8b826096225',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MPJCOMPUTADORES\Desktop\the-challenge-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map