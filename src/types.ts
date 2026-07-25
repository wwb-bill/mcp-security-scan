export interface McpServerConfig{name:string;command:string;args?:string[];env?:Record<string,string>;url?:string;transport?:string;}
export interface ScanFinding{rule:string;severity:"high"|"medium"|"low";message:string;}
export interface ScanReport{server:string;passed:boolean;findings:ScanFinding[];}