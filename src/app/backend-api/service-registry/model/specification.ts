/**
 * Maritime Cloud Service Registry API
 * Maritime Cloud Service Registry, developed under the Horizon 2020 Project EfficienSea2, cofunded by the European Union.
 *
 * OpenAPI spec version: 0.9
 * Contact: josef.jahn@frequentis.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Doc } from './doc';
import { SpecificationTemplate } from './specificationTemplate';
import { Xml } from './xml';


/**
 * Holds a logical description of a service. A specification can be compatible to one or morespecification templates.It has at least a technical representation of the servicedescriptiion in form of an XML and a filled out service templateas e.g. word document.
 */
export interface Specification { 
    comment?: string;
    docs?: Array<Doc>;
    id?: number;
    implementedSpecificationVersion?: SpecificationTemplate;
    keywords?: string;
    lastUpdatedAt?: string;
    name?: string;
    organizationId?: string;
    publishedAt?: string;
    specAsDoc?: Doc;
    specAsXml?: Xml;
    specificationId?: string;
    status?: string;
    version?: string;
}
