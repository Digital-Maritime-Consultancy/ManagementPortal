/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.
 *
 * OpenAPI spec version: 0.12.2
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Agent { 
    createdAt?: Date;
    id?: number;
    /**
     * The id of the organization that should be given agent permissions
     */
    idActingOrganization: number;
    /**
     * The id of the organization that is giving agent permissions
     */
    idOnBehalfOfOrganization?: number;
    updatedAt?: Date;
}
