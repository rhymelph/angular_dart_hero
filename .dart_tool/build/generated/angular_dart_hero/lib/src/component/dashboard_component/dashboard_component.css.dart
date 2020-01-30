final List<dynamic> styles = ['[class*=\'col-\']{\n    float: left;\n    padding-left: 20px;\n    padding-bottom: 20px;\n}\n\n[class*=\'col-\']:last-of-type{\n    padding-right: 0;\n}\n\na{\n    text-decoration: none;\n}\n* , *:after,*:before{\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\nh3{\n    text-align: center;margin-bottom: 0;\n}\n\nh4{\n    position: relative;\n}\n.grid{\n    margin: 0;\n}\n\n.col-1-4{\n    width: 25%;\n}\n\n.module{\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #607D8B;\n    border-radius: 2px;\n}\n.module:hover{\n    background-color: #eee;\n    cursor: pointer;\n    color: #607d8b;\n}\n.grid-pad{\n    padding: 10px,0;\n}\n\n.grid-pad > [class*=\'col-\']:last-of-type{\n    padding-right: 20px;\n}\n@media (max-width:600px){\n    .module{\n        font-size: 10px;\n        max-height: 75px;\n    }\n}\n@media (max-width:1024px){\n    .grid{\n        margin: 0;\n    }\n    .module{\n        min-width: 60px;\n    }\n}'];