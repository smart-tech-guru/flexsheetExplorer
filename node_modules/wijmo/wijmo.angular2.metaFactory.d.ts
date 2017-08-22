import * as wjcMetafactory from 'wijmo/wijmo.metaFactory';
export declare class MetaFactory extends wjcMetafactory.ControlMetaFactory {
    static CreateProp(propertyName: string, propertyType: wjcMetafactory.PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDesc;
    static CreateEvent(eventName: string, isPropChanged?: boolean): EventDesc;
    static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDesc;
    static findProp(propName: string, props: PropDesc[]): PropDesc;
    static findEvent(eventName: string, events: EventDesc[]): EventDesc;
    static findComplexProp(propName: string, props: ComplexPropDesc[]): ComplexPropDesc;
}
export declare class PropDesc extends wjcMetafactory.PropDescBase {
}
export declare class EventDesc extends wjcMetafactory.EventDescBase {
}
export declare class ComplexPropDesc extends wjcMetafactory.ComplexPropDescBase {
}
