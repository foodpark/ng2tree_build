"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeEvent = (function () {
    function NodeEvent(node) {
        this.node = node;
    }
    return NodeEvent;
}());
exports.NodeEvent = NodeEvent;
var NodeSelectedEvent = (function (_super) {
    __extends(NodeSelectedEvent, _super);
    function NodeSelectedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeSelectedEvent;
}(NodeEvent));
exports.NodeSelectedEvent = NodeSelectedEvent;
var NodeUnselectedEvent = (function (_super) {
    __extends(NodeUnselectedEvent, _super);
    function NodeUnselectedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeUnselectedEvent;
}(NodeEvent));
exports.NodeUnselectedEvent = NodeUnselectedEvent;
var NodeDestructiveEvent = (function (_super) {
    __extends(NodeDestructiveEvent, _super);
    function NodeDestructiveEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeDestructiveEvent;
}(NodeEvent));
exports.NodeDestructiveEvent = NodeDestructiveEvent;
var NodeMovedEvent = (function (_super) {
    __extends(NodeMovedEvent, _super);
    function NodeMovedEvent(node, previousParent) {
        var _this = _super.call(this, node) || this;
        _this.previousParent = previousParent;
        return _this;
    }
    return NodeMovedEvent;
}(NodeDestructiveEvent));
exports.NodeMovedEvent = NodeMovedEvent;
var NodeRemovedEvent = (function (_super) {
    __extends(NodeRemovedEvent, _super);
    function NodeRemovedEvent(node, lastIndex) {
        var _this = _super.call(this, node) || this;
        _this.lastIndex = lastIndex;
        return _this;
    }
    return NodeRemovedEvent;
}(NodeDestructiveEvent));
exports.NodeRemovedEvent = NodeRemovedEvent;
var NodeCreatedEvent = (function (_super) {
    __extends(NodeCreatedEvent, _super);
    function NodeCreatedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeCreatedEvent;
}(NodeDestructiveEvent));
exports.NodeCreatedEvent = NodeCreatedEvent;
var NodeRenamedEvent = (function (_super) {
    __extends(NodeRenamedEvent, _super);
    function NodeRenamedEvent(node, oldValue, newValue) {
        var _this = _super.call(this, node) || this;
        _this.oldValue = oldValue;
        _this.newValue = newValue;
        return _this;
    }
    return NodeRenamedEvent;
}(NodeDestructiveEvent));
exports.NodeRenamedEvent = NodeRenamedEvent;
var NodeExpandedEvent = (function (_super) {
    __extends(NodeExpandedEvent, _super);
    function NodeExpandedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeExpandedEvent;
}(NodeEvent));
exports.NodeExpandedEvent = NodeExpandedEvent;
var NodeCollapsedEvent = (function (_super) {
    __extends(NodeCollapsedEvent, _super);
    function NodeCollapsedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeCollapsedEvent;
}(NodeEvent));
exports.NodeCollapsedEvent = NodeCollapsedEvent;
var MenuItemSelectedEvent = (function (_super) {
    __extends(MenuItemSelectedEvent, _super);
    function MenuItemSelectedEvent(node, selectedItem) {
        var _this = _super.call(this, node) || this;
        _this.selectedItem = selectedItem;
        return _this;
    }
    return MenuItemSelectedEvent;
}(NodeEvent));
exports.MenuItemSelectedEvent = MenuItemSelectedEvent;
var LoadNextLevelEvent = (function (_super) {
    __extends(LoadNextLevelEvent, _super);
    function LoadNextLevelEvent(node) {
        return _super.call(this, node) || this;
    }
    return LoadNextLevelEvent;
}(NodeEvent));
exports.LoadNextLevelEvent = LoadNextLevelEvent;
var NodeCheckedEvent = (function (_super) {
    __extends(NodeCheckedEvent, _super);
    function NodeCheckedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeCheckedEvent;
}(NodeEvent));
exports.NodeCheckedEvent = NodeCheckedEvent;
var NodeUncheckedEvent = (function (_super) {
    __extends(NodeUncheckedEvent, _super);
    function NodeUncheckedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeUncheckedEvent;
}(NodeEvent));
exports.NodeUncheckedEvent = NodeUncheckedEvent;
var NodeIndeterminedEvent = (function (_super) {
    __extends(NodeIndeterminedEvent, _super);
    function NodeIndeterminedEvent(node) {
        return _super.call(this, node) || this;
    }
    return NodeIndeterminedEvent;
}(NodeEvent));
exports.NodeIndeterminedEvent = NodeIndeterminedEvent;
//# sourceMappingURL=tree.events.js.map