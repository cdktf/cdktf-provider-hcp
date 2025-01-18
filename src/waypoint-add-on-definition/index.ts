/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointAddOnDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A longer description of the Add-on Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}
  */
  readonly description: string;
  /**
  * List of labels attached to this Add-on Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}
  */
  readonly labels?: string[];
  /**
  * The name of the Add-on Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint Add-on Definition is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}
  */
  readonly projectId?: string;
  /**
  * The markdown template for the Add-on Definition README (markdown format supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}
  */
  readonly readmeMarkdownTemplate?: string;
  /**
  * A short summary of the Add-on Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}
  */
  readonly summary: string;
  /**
  * The ID of the Terraform agent pool to use for running Terraform operations. This is only applicable when the execution mode is set to 'agent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}
  */
  readonly terraformAgentPoolId?: string;
  /**
  * Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}
  */
  readonly terraformCloudWorkspaceDetails?: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails;
  /**
  * The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}
  */
  readonly terraformExecutionMode?: string;
  /**
  * The ID of the Terraform no-code module to use for running Terraform operations. This is in the format of 'nocode-<ID>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_id WaypointAddOnDefinition#terraform_no_code_module_id}
  */
  readonly terraformNoCodeModuleId: string;
  /**
  * Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}
  */
  readonly terraformNoCodeModuleSource: string;
  /**
  * The ID of the Terraform Cloud Project to create workspaces in. The ID is found on the Terraform Cloud Project settings page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}
  */
  readonly terraformProjectId: string;
  /**
  * List of variable options for the Add-on Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}
  */
  readonly variableOptions?: WaypointAddOnDefinitionVariableOptions[] | cdktf.IResolvable;
}
export interface WaypointAddOnDefinitionTerraformCloudWorkspaceDetails {
  /**
  * Name of the Terraform Cloud Project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}
  */
  readonly name: string;
  /**
  * Terraform Cloud Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}
  */
  readonly terraformProjectId: string;
}

export function waypointAddOnDefinitionTerraformCloudWorkspaceDetailsToTerraform(struct?: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    terraform_project_id: cdktf.stringToTerraform(struct!.terraformProjectId),
  }
}


export function waypointAddOnDefinitionTerraformCloudWorkspaceDetailsToHclTerraform(struct?: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terraform_project_id: {
      value: cdktf.stringToHclTerraform(struct!.terraformProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaypointAddOnDefinitionTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._terraformProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformProjectId = this._terraformProjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._terraformProjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._terraformProjectId = value.terraformProjectId;
    }
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // terraform_project_id - computed: true, optional: false, required: true
  private _terraformProjectId?: string; 
  public get terraformProjectId() {
    return this.getStringAttribute('terraform_project_id');
  }
  public set terraformProjectId(value: string) {
    this._terraformProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformProjectIdInput() {
    return this._terraformProjectId;
  }
}
export interface WaypointAddOnDefinitionVariableOptions {
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}
  */
  readonly name: string;
  /**
  * List of options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#options WaypointAddOnDefinition#options}
  */
  readonly options: string[];
  /**
  * Whether the variable is editable by the user creating an add-on. If options are provided, then the user may only use those options, regardless of this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#user_editable WaypointAddOnDefinition#user_editable}
  */
  readonly userEditable?: boolean | cdktf.IResolvable;
  /**
  * Variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#variable_type WaypointAddOnDefinition#variable_type}
  */
  readonly variableType: string;
}

export function waypointAddOnDefinitionVariableOptionsToTerraform(struct?: WaypointAddOnDefinitionVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    user_editable: cdktf.booleanToTerraform(struct!.userEditable),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}


export function waypointAddOnDefinitionVariableOptionsToHclTerraform(struct?: WaypointAddOnDefinitionVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_editable: {
      value: cdktf.booleanToHclTerraform(struct!.userEditable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variable_type: {
      value: cdktf.stringToHclTerraform(struct!.variableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaypointAddOnDefinitionVariableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WaypointAddOnDefinitionVariableOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._userEditable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEditable = this._userEditable;
    }
    if (this._variableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableType = this._variableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointAddOnDefinitionVariableOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._options = undefined;
      this._userEditable = undefined;
      this._variableType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._options = value.options;
      this._userEditable = value.userEditable;
      this._variableType = value.variableType;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options - computed: false, optional: false, required: true
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // user_editable - computed: true, optional: true, required: false
  private _userEditable?: boolean | cdktf.IResolvable; 
  public get userEditable() {
    return this.getBooleanAttribute('user_editable');
  }
  public set userEditable(value: boolean | cdktf.IResolvable) {
    this._userEditable = value;
  }
  public resetUserEditable() {
    this._userEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEditableInput() {
    return this._userEditable;
  }

  // variable_type - computed: false, optional: false, required: true
  private _variableType?: string; 
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string) {
    this._variableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType;
  }
}

export class WaypointAddOnDefinitionVariableOptionsList extends cdktf.ComplexList {
  public internalValue? : WaypointAddOnDefinitionVariableOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WaypointAddOnDefinitionVariableOptionsOutputReference {
    return new WaypointAddOnDefinitionVariableOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition hcp_waypoint_add_on_definition}
*/
export class WaypointAddOnDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_add_on_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointAddOnDefinition to import
  * @param importFromId The id of the existing WaypointAddOnDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointAddOnDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_add_on_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_add_on_definition hcp_waypoint_add_on_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointAddOnDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointAddOnDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_add_on_definition',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.102.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._projectId = config.projectId;
    this._readmeMarkdownTemplate = config.readmeMarkdownTemplate;
    this._summary = config.summary;
    this._terraformAgentPoolId = config.terraformAgentPoolId;
    this._terraformCloudWorkspaceDetails.internalValue = config.terraformCloudWorkspaceDetails;
    this._terraformExecutionMode = config.terraformExecutionMode;
    this._terraformNoCodeModuleId = config.terraformNoCodeModuleId;
    this._terraformNoCodeModuleSource = config.terraformNoCodeModuleSource;
    this._terraformProjectId = config.terraformProjectId;
    this._variableOptions.internalValue = config.variableOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // readme_markdown_template - computed: false, optional: true, required: false
  private _readmeMarkdownTemplate?: string; 
  public get readmeMarkdownTemplate() {
    return this.getStringAttribute('readme_markdown_template');
  }
  public set readmeMarkdownTemplate(value: string) {
    this._readmeMarkdownTemplate = value;
  }
  public resetReadmeMarkdownTemplate() {
    this._readmeMarkdownTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeMarkdownTemplateInput() {
    return this._readmeMarkdownTemplate;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // terraform_agent_pool_id - computed: false, optional: true, required: false
  private _terraformAgentPoolId?: string; 
  public get terraformAgentPoolId() {
    return this.getStringAttribute('terraform_agent_pool_id');
  }
  public set terraformAgentPoolId(value: string) {
    this._terraformAgentPoolId = value;
  }
  public resetTerraformAgentPoolId() {
    this._terraformAgentPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformAgentPoolIdInput() {
    return this._terraformAgentPoolId;
  }

  // terraform_cloud_workspace_details - computed: true, optional: true, required: false
  private _terraformCloudWorkspaceDetails = new WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference(this, "terraform_cloud_workspace_details");
  public get terraformCloudWorkspaceDetails() {
    return this._terraformCloudWorkspaceDetails;
  }
  public putTerraformCloudWorkspaceDetails(value: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails) {
    this._terraformCloudWorkspaceDetails.internalValue = value;
  }
  public resetTerraformCloudWorkspaceDetails() {
    this._terraformCloudWorkspaceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformCloudWorkspaceDetailsInput() {
    return this._terraformCloudWorkspaceDetails.internalValue;
  }

  // terraform_execution_mode - computed: false, optional: true, required: false
  private _terraformExecutionMode?: string; 
  public get terraformExecutionMode() {
    return this.getStringAttribute('terraform_execution_mode');
  }
  public set terraformExecutionMode(value: string) {
    this._terraformExecutionMode = value;
  }
  public resetTerraformExecutionMode() {
    this._terraformExecutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformExecutionModeInput() {
    return this._terraformExecutionMode;
  }

  // terraform_no_code_module_id - computed: false, optional: false, required: true
  private _terraformNoCodeModuleId?: string; 
  public get terraformNoCodeModuleId() {
    return this.getStringAttribute('terraform_no_code_module_id');
  }
  public set terraformNoCodeModuleId(value: string) {
    this._terraformNoCodeModuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformNoCodeModuleIdInput() {
    return this._terraformNoCodeModuleId;
  }

  // terraform_no_code_module_source - computed: false, optional: false, required: true
  private _terraformNoCodeModuleSource?: string; 
  public get terraformNoCodeModuleSource() {
    return this.getStringAttribute('terraform_no_code_module_source');
  }
  public set terraformNoCodeModuleSource(value: string) {
    this._terraformNoCodeModuleSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformNoCodeModuleSourceInput() {
    return this._terraformNoCodeModuleSource;
  }

  // terraform_project_id - computed: false, optional: false, required: true
  private _terraformProjectId?: string; 
  public get terraformProjectId() {
    return this.getStringAttribute('terraform_project_id');
  }
  public set terraformProjectId(value: string) {
    this._terraformProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformProjectIdInput() {
    return this._terraformProjectId;
  }

  // variable_options - computed: false, optional: true, required: false
  private _variableOptions = new WaypointAddOnDefinitionVariableOptionsList(this, "variable_options", true);
  public get variableOptions() {
    return this._variableOptions;
  }
  public putVariableOptions(value: WaypointAddOnDefinitionVariableOptions[] | cdktf.IResolvable) {
    this._variableOptions.internalValue = value;
  }
  public resetVariableOptions() {
    this._variableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableOptionsInput() {
    return this._variableOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      readme_markdown_template: cdktf.stringToTerraform(this._readmeMarkdownTemplate),
      summary: cdktf.stringToTerraform(this._summary),
      terraform_agent_pool_id: cdktf.stringToTerraform(this._terraformAgentPoolId),
      terraform_cloud_workspace_details: waypointAddOnDefinitionTerraformCloudWorkspaceDetailsToTerraform(this._terraformCloudWorkspaceDetails.internalValue),
      terraform_execution_mode: cdktf.stringToTerraform(this._terraformExecutionMode),
      terraform_no_code_module_id: cdktf.stringToTerraform(this._terraformNoCodeModuleId),
      terraform_no_code_module_source: cdktf.stringToTerraform(this._terraformNoCodeModuleSource),
      terraform_project_id: cdktf.stringToTerraform(this._terraformProjectId),
      variable_options: cdktf.listMapper(waypointAddOnDefinitionVariableOptionsToTerraform, false)(this._variableOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readme_markdown_template: {
        value: cdktf.stringToHclTerraform(this._readmeMarkdownTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_agent_pool_id: {
        value: cdktf.stringToHclTerraform(this._terraformAgentPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_cloud_workspace_details: {
        value: waypointAddOnDefinitionTerraformCloudWorkspaceDetailsToHclTerraform(this._terraformCloudWorkspaceDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaypointAddOnDefinitionTerraformCloudWorkspaceDetails",
      },
      terraform_execution_mode: {
        value: cdktf.stringToHclTerraform(this._terraformExecutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_no_code_module_id: {
        value: cdktf.stringToHclTerraform(this._terraformNoCodeModuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_no_code_module_source: {
        value: cdktf.stringToHclTerraform(this._terraformNoCodeModuleSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_project_id: {
        value: cdktf.stringToHclTerraform(this._terraformProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_options: {
        value: cdktf.listMapperHcl(waypointAddOnDefinitionVariableOptionsToHclTerraform, false)(this._variableOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WaypointAddOnDefinitionVariableOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
