// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../eslint-scope
//   ../eslint-visitor-keys

declare module 'vue-eslint-parser' {
    import * as AST from "vue-eslint-parser/ast";
    export function parseForESLint(code: string, options: any): AST.ESLintExtendedProgram;
    export function parse(code: string, options: any): AST.ESLintProgram;
    export { AST };
}

declare module 'vue-eslint-parser/ast' {
    export * from "vue-eslint-parser/ast/errors";
    export * from "vue-eslint-parser/ast/locations";
    export * from "vue-eslint-parser/ast/nodes";
    export * from "vue-eslint-parser/ast/tokens";
    export * from "vue-eslint-parser/ast/traverse";
}

declare module 'vue-eslint-parser/ast/errors' {
    export class ParseError extends SyntaxError {
        code?: ErrorCode;
        index: number;
        lineNumber: number;
        column: number;
        static fromCode(code: ErrorCode, offset: number, line: number, column: number): ParseError;
        static normalize(x: any): ParseError | null;
        constructor(message: string, code: ErrorCode | undefined, offset: number, line: number, column: number);
        static isParseError(x: any): x is ParseError;
    }
    export type ErrorCode = "abrupt-closing-of-empty-comment" | "absence-of-digits-in-numeric-character-reference" | "cdata-in-html-content" | "character-reference-outside-unicode-range" | "control-character-in-input-stream" | "control-character-reference" | "eof-before-tag-name" | "eof-in-cdata" | "eof-in-comment" | "eof-in-tag" | "incorrectly-closed-comment" | "incorrectly-opened-comment" | "invalid-first-character-of-tag-name" | "missing-attribute-value" | "missing-end-tag-name" | "missing-semicolon-after-character-reference" | "missing-whitespace-between-attributes" | "nested-comment" | "noncharacter-character-reference" | "noncharacter-in-input-stream" | "null-character-reference" | "surrogate-character-reference" | "surrogate-in-input-stream" | "unexpected-character-in-attribute-name" | "unexpected-character-in-unquoted-attribute-value" | "unexpected-equals-sign-before-attribute-name" | "unexpected-null-character" | "unexpected-question-mark-instead-of-tag-name" | "unexpected-solidus-in-tag" | "unknown-named-character-reference" | "end-tag-with-attributes" | "duplicate-attribute" | "end-tag-with-trailing-solidus" | "non-void-html-element-start-tag-with-trailing-solidus" | "x-invalid-end-tag" | "x-invalid-namespace";
}

declare module 'vue-eslint-parser/ast/locations' {
    export interface Location {
        line: number;
        column: number;
    }
    export interface LocationRange {
        start: Location;
        end: Location;
    }
    export type Offset = number;
    export type OffsetRange = [Offset, Offset];
    export interface HasLocation {
        range: OffsetRange;
        loc: LocationRange;
        start?: number;
        end?: number;
    }
}

declare module 'vue-eslint-parser/ast/nodes' {
    import { ScopeManager } from "eslint-scope";
    import { ParseError } from "vue-eslint-parser/ast/errors";
    import { HasLocation } from "vue-eslint-parser/ast/locations";
    import { Token } from "vue-eslint-parser/ast/tokens";
    export interface HasParent {
        parent?: Node | null;
    }
    export type Node = ESLintNode | VNode | VForExpression | VOnExpression | VSlotScopeExpression | VFilterSequenceExpression | VFilter;
    export type ESLintNode = ESLintIdentifier | ESLintLiteral | ESLintProgram | ESLintSwitchCase | ESLintCatchClause | ESLintVariableDeclarator | ESLintStatement | ESLintExpression | ESLintProperty | ESLintAssignmentProperty | ESLintSuper | ESLintTemplateElement | ESLintSpreadElement | ESLintPattern | ESLintClassBody | ESLintMethodDefinition | ESLintModuleDeclaration | ESLintModuleSpecifier | ESLintLegacyRestProperty;
    export interface ESLintExtendedProgram {
        ast: ESLintProgram;
        services?: {};
        visitorKeys?: {
            [type: string]: string[];
        };
        scopeManager?: ScopeManager;
    }
    export interface ESLintProgram extends HasLocation, HasParent {
        type: "Program";
        sourceType: "script" | "module";
        body: (ESLintStatement | ESLintModuleDeclaration)[];
        templateBody?: VElement & HasConcreteInfo;
        tokens?: Token[];
        comments?: Token[];
        errors?: ParseError[];
    }
    export type ESLintStatement = ESLintExpressionStatement | ESLintBlockStatement | ESLintEmptyStatement | ESLintDebuggerStatement | ESLintWithStatement | ESLintReturnStatement | ESLintLabeledStatement | ESLintBreakStatement | ESLintContinueStatement | ESLintIfStatement | ESLintSwitchStatement | ESLintThrowStatement | ESLintTryStatement | ESLintWhileStatement | ESLintDoWhileStatement | ESLintForStatement | ESLintForInStatement | ESLintForOfStatement | ESLintDeclaration;
    export interface ESLintEmptyStatement extends HasLocation, HasParent {
        type: "EmptyStatement";
    }
    export interface ESLintBlockStatement extends HasLocation, HasParent {
        type: "BlockStatement";
        body: ESLintStatement[];
    }
    export interface ESLintExpressionStatement extends HasLocation, HasParent {
        type: "ExpressionStatement";
        expression: ESLintExpression;
    }
    export interface ESLintIfStatement extends HasLocation, HasParent {
        type: "IfStatement";
        test: ESLintExpression;
        consequent: ESLintStatement;
        alternate: ESLintStatement | null;
    }
    export interface ESLintSwitchStatement extends HasLocation, HasParent {
        type: "SwitchStatement";
        discriminant: ESLintExpression;
        cases: ESLintSwitchCase[];
    }
    export interface ESLintSwitchCase extends HasLocation, HasParent {
        type: "SwitchCase";
        test: ESLintExpression | null;
        consequent: ESLintStatement[];
    }
    export interface ESLintWhileStatement extends HasLocation, HasParent {
        type: "WhileStatement";
        test: ESLintExpression;
        body: ESLintStatement;
    }
    export interface ESLintDoWhileStatement extends HasLocation, HasParent {
        type: "DoWhileStatement";
        body: ESLintStatement;
        test: ESLintExpression;
    }
    export interface ESLintForStatement extends HasLocation, HasParent {
        type: "ForStatement";
        init: ESLintVariableDeclaration | ESLintExpression | null;
        test: ESLintExpression | null;
        update: ESLintExpression | null;
        body: ESLintStatement;
    }
    export interface ESLintForInStatement extends HasLocation, HasParent {
        type: "ForInStatement";
        left: ESLintVariableDeclaration | ESLintPattern;
        right: ESLintExpression;
        body: ESLintStatement;
    }
    export interface ESLintForOfStatement extends HasLocation, HasParent {
        type: "ForOfStatement";
        left: ESLintVariableDeclaration | ESLintPattern;
        right: ESLintExpression;
        body: ESLintStatement;
    }
    export interface ESLintLabeledStatement extends HasLocation, HasParent {
        type: "LabeledStatement";
        label: ESLintIdentifier;
        body: ESLintStatement;
    }
    export interface ESLintBreakStatement extends HasLocation, HasParent {
        type: "BreakStatement";
        label: ESLintIdentifier | null;
    }
    export interface ESLintContinueStatement extends HasLocation, HasParent {
        type: "ContinueStatement";
        label: ESLintIdentifier | null;
    }
    export interface ESLintReturnStatement extends HasLocation, HasParent {
        type: "ReturnStatement";
        argument: ESLintExpression | null;
    }
    export interface ESLintThrowStatement extends HasLocation, HasParent {
        type: "ThrowStatement";
        argument: ESLintExpression;
    }
    export interface ESLintTryStatement extends HasLocation, HasParent {
        type: "TryStatement";
        block: ESLintBlockStatement;
        handler: ESLintCatchClause | null;
        finalizer: ESLintBlockStatement | null;
    }
    export interface ESLintCatchClause extends HasLocation, HasParent {
        type: "CatchClause";
        param: ESLintPattern;
        body: ESLintBlockStatement;
    }
    export interface ESLintWithStatement extends HasLocation, HasParent {
        type: "WithStatement";
        object: ESLintExpression;
        body: ESLintStatement;
    }
    export interface ESLintDebuggerStatement extends HasLocation, HasParent {
        type: "DebuggerStatement";
    }
    export type ESLintDeclaration = ESLintFunctionDeclaration | ESLintVariableDeclaration | ESLintClassDeclaration;
    export interface ESLintFunctionDeclaration extends HasLocation, HasParent {
        type: "FunctionDeclaration";
        async: boolean;
        generator: boolean;
        id: ESLintIdentifier | null;
        params: ESLintPattern[];
        body: ESLintBlockStatement;
    }
    export interface ESLintVariableDeclaration extends HasLocation, HasParent {
        type: "VariableDeclaration";
        kind: "var" | "let" | "const";
        declarations: ESLintVariableDeclarator[];
    }
    export interface ESLintVariableDeclarator extends HasLocation, HasParent {
        type: "VariableDeclarator";
        id: ESLintPattern;
        init: ESLintExpression | null;
    }
    export interface ESLintClassDeclaration extends HasLocation, HasParent {
        type: "ClassDeclaration";
        id: ESLintIdentifier | null;
        superClass: ESLintExpression | null;
        body: ESLintClassBody;
    }
    export interface ESLintClassBody extends HasLocation, HasParent {
        type: "ClassBody";
        body: ESLintMethodDefinition[];
    }
    export interface ESLintMethodDefinition extends HasLocation, HasParent {
        type: "MethodDefinition";
        kind: "constructor" | "method" | "get" | "set";
        computed: boolean;
        static: boolean;
        key: ESLintExpression;
        value: ESLintFunctionExpression;
    }
    export type ESLintModuleDeclaration = ESLintImportDeclaration | ESLintExportNamedDeclaration | ESLintExportDefaultDeclaration | ESLintExportAllDeclaration;
    export type ESLintModuleSpecifier = ESLintImportSpecifier | ESLintImportDefaultSpecifier | ESLintImportNamespaceSpecifier | ESLintExportSpecifier;
    export interface ESLintImportDeclaration extends HasLocation, HasParent {
        type: "ImportDeclaration";
        specifiers: (ESLintImportSpecifier | ESLintImportDefaultSpecifier | ESLintImportNamespaceSpecifier)[];
        source: ESLintLiteral;
    }
    export interface ESLintImportSpecifier extends HasLocation, HasParent {
        type: "ImportSpecifier";
        imported: ESLintIdentifier;
        local: ESLintIdentifier;
    }
    export interface ESLintImportDefaultSpecifier extends HasLocation, HasParent {
        type: "ImportDefaultSpecifier";
        local: ESLintIdentifier;
    }
    export interface ESLintImportNamespaceSpecifier extends HasLocation, HasParent {
        type: "ImportNamespaceSpecifier";
        local: ESLintIdentifier;
    }
    export interface ESLintExportNamedDeclaration extends HasLocation, HasParent {
        type: "ExportNamedDeclaration";
        declaration?: ESLintDeclaration | null;
        specifiers: ESLintExportSpecifier[];
        source?: ESLintLiteral | null;
    }
    export interface ESLintExportSpecifier extends HasLocation, HasParent {
        type: "ExportSpecifier";
        exported: ESLintIdentifier;
    }
    export interface ESLintExportDefaultDeclaration extends HasLocation, HasParent {
        type: "ExportDefaultDeclaration";
        declaration: ESLintDeclaration | ESLintExpression;
    }
    export interface ESLintExportAllDeclaration extends HasLocation, HasParent {
        type: "ExportAllDeclaration";
        source: ESLintLiteral;
    }
    export type ESLintExpression = ESLintThisExpression | ESLintArrayExpression | ESLintObjectExpression | ESLintFunctionExpression | ESLintArrowFunctionExpression | ESLintYieldExpression | ESLintLiteral | ESLintUnaryExpression | ESLintUpdateExpression | ESLintBinaryExpression | ESLintAssignmentExpression | ESLintLogicalExpression | ESLintMemberExpression | ESLintConditionalExpression | ESLintCallExpression | ESLintNewExpression | ESLintSequenceExpression | ESLintTemplateLiteral | ESLintTaggedTemplateExpression | ESLintClassExpression | ESLintMetaProperty | ESLintIdentifier | ESLintAwaitExpression;
    export interface ESLintIdentifier extends HasLocation, HasParent {
        type: "Identifier";
        name: string;
    }
    export interface ESLintLiteral extends HasLocation, HasParent {
        type: "Literal";
        value: string | boolean | null | number | RegExp;
        regex?: {
            pattern: string;
            flags: string;
        };
    }
    export interface ESLintThisExpression extends HasLocation, HasParent {
        type: "ThisExpression";
    }
    export interface ESLintArrayExpression extends HasLocation, HasParent {
        type: "ArrayExpression";
        elements: (ESLintExpression | ESLintSpreadElement)[];
    }
    export interface ESLintObjectExpression extends HasLocation, HasParent {
        type: "ObjectExpression";
        properties: (ESLintProperty | ESLintSpreadElement | ESLintLegacySpreadProperty)[];
    }
    export interface ESLintProperty extends HasLocation, HasParent {
        type: "Property";
        kind: "init" | "get" | "set";
        method: boolean;
        shorthand: boolean;
        computed: boolean;
        key: ESLintExpression;
        value: ESLintExpression | ESLintPattern;
    }
    export interface ESLintFunctionExpression extends HasLocation, HasParent {
        type: "FunctionExpression";
        async: boolean;
        generator: boolean;
        id: ESLintIdentifier | null;
        params: ESLintPattern[];
        body: ESLintBlockStatement;
    }
    export interface ESLintArrowFunctionExpression extends HasLocation, HasParent {
        type: "ArrowFunctionExpression";
        async: boolean;
        generator: boolean;
        id: ESLintIdentifier | null;
        params: ESLintPattern[];
        body: ESLintBlockStatement;
    }
    export interface ESLintSequenceExpression extends HasLocation, HasParent {
        type: "SequenceExpression";
        expressions: ESLintExpression[];
    }
    export interface ESLintUnaryExpression extends HasLocation, HasParent {
        type: "UnaryExpression";
        operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";
        prefix: boolean;
        argument: ESLintExpression;
    }
    export interface ESLintBinaryExpression extends HasLocation, HasParent {
        type: "BinaryExpression";
        operator: "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "**" | "|" | "^" | "&" | "in" | "instanceof";
        left: ESLintExpression;
        right: ESLintExpression;
    }
    export interface ESLintAssignmentExpression extends HasLocation, HasParent {
        type: "AssignmentExpression";
        operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "**=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=";
        left: ESLintPattern;
        right: ESLintExpression;
    }
    export interface ESLintUpdateExpression extends HasLocation, HasParent {
        type: "UpdateExpression";
        operator: "++" | "--";
        argument: ESLintExpression;
        prefix: boolean;
    }
    export interface ESLintLogicalExpression extends HasLocation, HasParent {
        type: "LogicalExpression";
        operator: "||" | "&&";
        left: ESLintExpression;
        right: ESLintExpression;
    }
    export interface ESLintConditionalExpression extends HasLocation, HasParent {
        type: "ConditionalExpression";
        test: ESLintExpression;
        alternate: ESLintExpression;
        consequent: ESLintExpression;
    }
    export interface ESLintCallExpression extends HasLocation, HasParent {
        type: "CallExpression";
        callee: ESLintExpression | ESLintSuper;
        arguments: (ESLintExpression | ESLintSpreadElement)[];
    }
    export interface ESLintSuper extends HasLocation, HasParent {
        type: "Super";
    }
    export interface ESLintNewExpression extends HasLocation, HasParent {
        type: "NewExpression";
        callee: ESLintExpression;
        arguments: (ESLintExpression | ESLintSpreadElement)[];
    }
    export interface ESLintMemberExpression extends HasLocation, HasParent {
        type: "MemberExpression";
        computed: boolean;
        object: ESLintExpression | ESLintSuper;
        property: ESLintExpression;
    }
    export interface ESLintYieldExpression extends HasLocation, HasParent {
        type: "YieldExpression";
        delegate: boolean;
        argument: ESLintExpression | null;
    }
    export interface ESLintAwaitExpression extends HasLocation, HasParent {
        type: "AwaitExpression";
        argument: ESLintExpression;
    }
    export interface ESLintTemplateLiteral extends HasLocation, HasParent {
        type: "TemplateLiteral";
        quasis: ESLintTemplateElement[];
        expressions: ESLintExpression[];
    }
    export interface ESLintTaggedTemplateExpression extends HasLocation, HasParent {
        type: "TaggedTemplateExpression";
        tag: ESLintExpression;
        quasi: ESLintTemplateLiteral;
    }
    export interface ESLintTemplateElement extends HasLocation, HasParent {
        type: "TemplateElement";
        tail: boolean;
        value: {
            cooked: string;
            raw: string;
        };
    }
    export interface ESLintClassExpression extends HasLocation, HasParent {
        type: "ClassExpression";
        id: ESLintIdentifier | null;
        superClass: ESLintExpression | null;
        body: ESLintClassBody;
    }
    export interface ESLintMetaProperty extends HasLocation, HasParent {
        type: "MetaProperty";
        meta: ESLintIdentifier;
        property: ESLintIdentifier;
    }
    export type ESLintPattern = ESLintIdentifier | ESLintObjectPattern | ESLintArrayPattern | ESLintRestElement | ESLintAssignmentPattern | ESLintMemberExpression | ESLintLegacyRestProperty;
    export interface ESLintObjectPattern extends HasLocation, HasParent {
        type: "ObjectPattern";
        properties: (ESLintAssignmentProperty | ESLintRestElement | ESLintLegacyRestProperty)[];
    }
    export interface ESLintAssignmentProperty extends ESLintProperty {
        value: ESLintPattern;
        kind: "init";
        method: false;
    }
    export interface ESLintArrayPattern extends HasLocation, HasParent {
        type: "ArrayPattern";
        elements: ESLintPattern[];
    }
    export interface ESLintRestElement extends HasLocation, HasParent {
        type: "RestElement";
        argument: ESLintPattern;
    }
    export interface ESLintSpreadElement extends HasLocation, HasParent {
        type: "SpreadElement";
        argument: ESLintExpression;
    }
    export interface ESLintAssignmentPattern extends HasLocation, HasParent {
        type: "AssignmentPattern";
        left: ESLintPattern;
        right: ESLintExpression;
    }
    export interface ESLintLegacyRestProperty extends HasLocation, HasParent {
        type: "RestProperty" | "ExperimentalRestProperty";
        argument: ESLintPattern;
    }
    export interface ESLintLegacySpreadProperty extends HasLocation, HasParent {
        type: "SpreadProperty" | "ExperimentalSpreadProperty";
        argument: ESLintExpression;
    }
    export const NS: Readonly<{
        HTML: "http://www.w3.org/1999/xhtml";
        MathML: "http://www.w3.org/1998/Math/MathML";
        SVG: "http://www.w3.org/2000/svg";
        XLink: "http://www.w3.org/1999/xlink";
        XML: "http://www.w3.org/XML/1998/namespace";
        XMLNS: "http://www.w3.org/2000/xmlns/";
    }>;
    export type Namespace = typeof NS.HTML | typeof NS.MathML | typeof NS.SVG | typeof NS.XLink | typeof NS.XML | typeof NS.XMLNS;
    export interface Variable {
        id: ESLintIdentifier;
        kind: "v-for" | "scope";
        references: Reference[];
    }
    export interface Reference {
        id: ESLintIdentifier;
        mode: "rw" | "r" | "w";
        variable: Variable | null;
    }
    export interface VForExpression extends HasLocation, HasParent {
        type: "VForExpression";
        parent: VExpressionContainer;
        left: ESLintPattern[];
        right: ESLintExpression;
    }
    export interface VOnExpression extends HasLocation, HasParent {
        type: "VOnExpression";
        parent: VExpressionContainer;
        body: ESLintStatement[];
    }
    export interface VSlotScopeExpression extends HasLocation, HasParent {
        type: "VSlotScopeExpression";
        parent: VExpressionContainer;
        params: ESLintPattern[];
    }
    export interface VFilterSequenceExpression extends HasLocation, HasParent {
        type: "VFilterSequenceExpression";
        parent: VExpressionContainer;
        expression: ESLintExpression;
        filters: VFilter[];
    }
    export interface VFilter extends HasLocation, HasParent {
        type: "VFilter";
        parent: VFilterSequenceExpression;
        callee: ESLintIdentifier;
        arguments: (ESLintExpression | ESLintSpreadElement)[];
    }
    export type VNode = VAttribute | VDirective | VDirectiveKey | VDocumentFragment | VElement | VEndTag | VExpressionContainer | VIdentifier | VLiteral | VStartTag | VText;
    export interface VText extends HasLocation, HasParent {
        type: "VText";
        parent: VDocumentFragment | VElement;
        value: string;
    }
    export interface VExpressionContainer extends HasLocation, HasParent {
        type: "VExpressionContainer";
        parent: VDocumentFragment | VElement | VDirective;
        expression: ESLintExpression | VFilterSequenceExpression | VForExpression | VOnExpression | VSlotScopeExpression | null;
        references: Reference[];
    }
    export interface VIdentifier extends HasLocation, HasParent {
        type: "VIdentifier";
        parent: VAttribute;
        name: string;
        rawName: string;
    }
    export interface DirectiveKeyParts {
        name: string;
        argument: string | null;
        modifiers: string[];
    }
    export interface VDirectiveKey extends HasLocation, HasParent, DirectiveKeyParts {
        type: "VDirectiveKey";
        parent: VAttribute;
        shorthand: boolean;
        raw: DirectiveKeyParts;
    }
    export interface VLiteral extends HasLocation, HasParent {
        type: "VLiteral";
        parent: VAttribute;
        value: string;
    }
    export interface VAttribute extends HasLocation, HasParent {
        type: "VAttribute";
        parent: VStartTag;
        directive: false;
        key: VIdentifier;
        value: VLiteral | null;
    }
    export interface VDirective extends HasLocation, HasParent {
        type: "VAttribute";
        parent: VStartTag;
        directive: true;
        key: VDirectiveKey;
        value: VExpressionContainer | null;
    }
    export interface VStartTag extends HasLocation, HasParent {
        type: "VStartTag";
        parent: VElement;
        selfClosing: boolean;
        attributes: (VAttribute | VDirective)[];
    }
    export interface VEndTag extends HasLocation, HasParent {
        type: "VEndTag";
        parent: VElement;
    }
    export interface HasConcreteInfo {
        tokens: Token[];
        comments: Token[];
        errors: ParseError[];
    }
    export interface VElement extends HasLocation, HasParent {
        type: "VElement";
        parent: VDocumentFragment | VElement;
        namespace: Namespace;
        name: string;
        rawName: string;
        startTag: VStartTag;
        children: (VElement | VText | VExpressionContainer)[];
        endTag: VEndTag | null;
        variables: Variable[];
    }
    export interface VDocumentFragment extends HasLocation, HasParent, HasConcreteInfo {
        type: "VDocumentFragment";
        parent: null;
        children: (VElement | VText | VExpressionContainer)[];
    }
}

declare module 'vue-eslint-parser/ast/tokens' {
    import { HasLocation } from "vue-eslint-parser/ast/locations";
    export interface Token extends HasLocation {
        type: string;
        value: string;
    }
}

declare module 'vue-eslint-parser/ast/traverse' {
    import { VisitorKeys } from "eslint-visitor-keys";
    import { Node } from "vue-eslint-parser/ast/nodes";
    function getFallbackKeys(node: Node): string[];
    export interface Visitor {
        visitorKeys?: VisitorKeys;
        enterNode(node: Node, parent: Node | null): void;
        leaveNode(node: Node, parent: Node | null): void;
    }
    export function traverseNodes(node: Node, visitor: Visitor): void;
    export { getFallbackKeys };
}

