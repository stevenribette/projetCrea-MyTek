"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/share");
require("rxjs/add/operator/startWith");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var core_1 = require("@angular/core");
var globals = /** @class */ (function () {
    function globals() {
        this.userId = new BehaviorSubject_1.BehaviorSubject(null);
    }
    globals.prototype.setUserId = function (id) {
        alert(id);
        this.userId.next(id);
    };
    globals = __decorate([
        core_1.Injectable()
    ], globals);
    return globals;
}());
exports.globals = globals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQWlDO0FBQ2pDLHVDQUFxQztBQUNyQyx3REFBcUQ7QUFDckQsc0NBQTJDO0FBSTNDO0lBRkE7UUFHVyxXQUFNLEdBQTJCLElBQUksaUNBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztJQUs5RSxDQUFDO0lBSkcsMkJBQVMsR0FBVCxVQUFVLEVBQUU7UUFDUixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBTFEsT0FBTztRQUZuQixpQkFBVSxFQUFFO09BRUEsT0FBTyxDQU1uQjtJQUFELGNBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3RhcnRXaXRoJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIGdsb2JhbHMge1xyXG4gICAgcHVibGljIHVzZXJJZDpCZWhhdmlvclN1YmplY3Q8TnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnVtYmVyPihudWxsKTtcclxuICAgIHNldFVzZXJJZChpZCl7XHJcbiAgICAgICAgYWxlcnQoaWQpO1xyXG4gICAgICAgIHRoaXMudXNlcklkLm5leHQoaWQpO1xyXG4gICAgfVxyXG59Il19