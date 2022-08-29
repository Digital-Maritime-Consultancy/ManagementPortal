/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.1
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface LedgerRequestDto { 
    id?: number;
    serviceInstanceId: number;
    status?: LedgerRequestDto.StatusEnum;
    reason?: string;
    createdAt?: Date;
    lastUpdatedAt?: Date;
}
export namespace LedgerRequestDto {
    export type StatusEnum = 'INACTIVE' | 'CREATED' | 'VETTING' | 'VETTED' | 'REQUESTING' | 'SUCCEEDED' | 'FAILED' | 'REJECTED';
    export const StatusEnum = {
        INACTIVE: 'INACTIVE' as StatusEnum,
        CREATED: 'CREATED' as StatusEnum,
        VETTING: 'VETTING' as StatusEnum,
        VETTED: 'VETTED' as StatusEnum,
        REQUESTING: 'REQUESTING' as StatusEnum,
        SUCCEEDED: 'SUCCEEDED' as StatusEnum,
        FAILED: 'FAILED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum
    };
}