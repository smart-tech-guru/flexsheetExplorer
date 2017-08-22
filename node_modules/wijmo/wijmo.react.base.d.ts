export declare class ComponentBase extends Object {
    controlType: any;
    props: any;
    constructor(props: any, controlType: any);
    render(): any;
    componentDidMount(): any;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any): boolean;
    private _getControl(component);
    private _copy(dst, src);
    private _sameValue(v1, v2);
}
