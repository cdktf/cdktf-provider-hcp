/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the template, along with when and why it should be used, up to 500 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#description WaypointTemplate#description}
  */
  readonly description?: string;
  /**
  * List of labels attached to this Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#labels WaypointTemplate#labels}
  */
  readonly labels?: string[];
  /**
  * The name of the Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint Template is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#project_id WaypointTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * Instructions for using the template (markdown format supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#readme_markdown_template WaypointTemplate#readme_markdown_template}
  */
  readonly readmeMarkdownTemplate?: string;
  /**
  * A brief description of the template, up to 110 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#summary WaypointTemplate#summary}
  */
  readonly summary: string;
  /**
  * The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template. Required if terraform_execution_mode is set to 'agent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_agent_pool_id WaypointTemplate#terraform_agent_pool_id}
  */
  readonly terraformAgentPoolId?: string;
  /**
  * Terraform Cloud Workspace details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_cloud_workspace_details WaypointTemplate#terraform_cloud_workspace_details}
  */
  readonly terraformCloudWorkspaceDetails?: WaypointTemplateTerraformCloudWorkspaceDetails;
  /**
  * The execution mode of the HCP Terraform workspaces created for applications using this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_execution_mode WaypointTemplate#terraform_execution_mode}
  */
  readonly terraformExecutionMode?: string;
  /**
  * Terraform Cloud No-Code Module details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_no_code_module_source WaypointTemplate#terraform_no_code_module_source}
  */
  readonly terraformNoCodeModuleSource: string;
  /**
  * The ID of the Terraform Cloud Project to create workspaces in. The ID is found on the Terraform Cloud Project settings page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}
  */
  readonly terraformProjectId: string;
  /**
  * If true, will auto-import the readme form the Terraform odule used. If this is set to true, users should not also set `readme_markdown_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#use_module_readme WaypointTemplate#use_module_readme}
  */
  readonly useModuleReadme?: boolean | cdktf.IResolvable;
  /**
  * List of variable options for the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#variable_options WaypointTemplate#variable_options}
  */
  readonly variableOptions?: WaypointTemplateVariableOptions[] | cdktf.IResolvable;
}
export interface WaypointTemplateTerraformCloudWorkspaceDetails {
  /**
  * Name of the Terraform Cloud Project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}
  */
  readonly name: string;
  /**
  * Terraform Cloud Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}
  */
  readonly terraformProjectId: string;
}

export function waypointTemplateTerraformCloudWorkspaceDetailsToTerraform(struct?: WaypointTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    terraform_project_id: cdktf.stringToTerraform(struct!.terraformProjectId),
  }
}


export function waypointTemplateTerraformCloudWorkspaceDetailsToHclTerraform(struct?: WaypointTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
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

export class WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaypointTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WaypointTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined) {
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
}
export interface WaypointTemplateVariableOptions {
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}
  */
  readonly name: string;
  /**
  * List of options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#options WaypointTemplate#options}
  */
  readonly options?: string[];
  /**
  * Whether the variable is editable by the user creating an application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#user_editable WaypointTemplate#user_editable}
  */
  readonly userEditable?: boolean | cdktf.IResolvable;
  /**
  * Variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#variable_type WaypointTemplate#variable_type}
  */
  readonly variableType: string;
}

export function waypointTemplateVariableOptionsToTerraform(struct?: WaypointTemplateVariableOptions | cdktf.IResolvable): any {
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


export function waypointTemplateVariableOptionsToHclTerraform(struct?: WaypointTemplateVariableOptions | cdktf.IResolvable): any {
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

export class WaypointTemplateVariableOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaypointTemplateVariableOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WaypointTemplateVariableOptions | cdktf.IResolvable | undefined) {
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
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

export class WaypointTemplateVariableOptionsList extends cdktf.ComplexList {
  public internalValue? : WaypointTemplateVariableOptions[] | cdktf.IResolvable

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
  public get(index: number): WaypointTemplateVariableOptionsOutputReference {
    return new WaypointTemplateVariableOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template hcp_waypoint_template}
*/
export class WaypointTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointTemplate to import
  * @param importFromId The id of the existing WaypointTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template hcp_waypoint_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_template',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.98.1',
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
    this._terraformNoCodeModuleSource = config.terraformNoCodeModuleSource;
    this._terraformProjectId = config.terraformProjectId;
    this._useModuleReadme = config.useModuleReadme;
    this._variableOptions.internalValue = config.variableOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
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

  // readme_markdown_template - computed: true, optional: true, required: false
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

  // terraform_cloud_workspace_details - computed: false, optional: true, required: false
  private _terraformCloudWorkspaceDetails = new WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference(this, "terraform_cloud_workspace_details");
  public get terraformCloudWorkspaceDetails() {
    return this._terraformCloudWorkspaceDetails;
  }
  public putTerraformCloudWorkspaceDetails(value: WaypointTemplateTerraformCloudWorkspaceDetails) {
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

  // use_module_readme - computed: false, optional: true, required: false
  private _useModuleReadme?: boolean | cdktf.IResolvable; 
  public get useModuleReadme() {
    return this.getBooleanAttribute('use_module_readme');
  }
  public set useModuleReadme(value: boolean | cdktf.IResolvable) {
    this._useModuleReadme = value;
  }
  public resetUseModuleReadme() {
    this._useModuleReadme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useModuleReadmeInput() {
    return this._useModuleReadme;
  }

  // variable_options - computed: false, optional: true, required: false
  private _variableOptions = new WaypointTemplateVariableOptionsList(this, "variable_options", true);
  public get variableOptions() {
    return this._variableOptions;
  }
  public putVariableOptions(value: WaypointTemplateVariableOptions[] | cdktf.IResolvable) {
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
      terraform_cloud_workspace_details: waypointTemplateTerraformCloudWorkspaceDetailsToTerraform(this._terraformCloudWorkspaceDetails.internalValue),
      terraform_execution_mode: cdktf.stringToTerraform(this._terraformExecutionMode),
      terraform_no_code_module_source: cdktf.stringToTerraform(this._terraformNoCodeModuleSource),
      terraform_project_id: cdktf.stringToTerraform(this._terraformProjectId),
      use_module_readme: cdktf.booleanToTerraform(this._useModuleReadme),
      variable_options: cdktf.listMapper(waypointTemplateVariableOptionsToTerraform, false)(this._variableOptions.internalValue),
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
        value: waypointTemplateTerraformCloudWorkspaceDetailsToHclTerraform(this._terraformCloudWorkspaceDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaypointTemplateTerraformCloudWorkspaceDetails",
      },
      terraform_execution_mode: {
        value: cdktf.stringToHclTerraform(this._terraformExecutionMode),
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
      use_module_readme: {
        value: cdktf.booleanToHclTerraform(this._useModuleReadme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      variable_options: {
        value: cdktf.listMapperHcl(waypointTemplateVariableOptionsToHclTerraform, false)(this._variableOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WaypointTemplateVariableOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
