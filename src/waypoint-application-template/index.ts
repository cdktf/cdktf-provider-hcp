// https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointApplicationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the template, along with when and why it should be used, up to 500 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}
  */
  readonly description?: string;
  /**
  * List of labels attached to this Application Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}
  */
  readonly labels?: string[];
  /**
  * The name of the Application Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint Application Template is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * Instructions for using the template (markdown format supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}
  */
  readonly readmeMarkdownTemplate?: string;
  /**
  * A brief description of the template, up to 110 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}
  */
  readonly summary: string;
  /**
  * Terraform Cloud Workspace details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}
  */
  readonly terraformCloudWorkspaceDetails: WaypointApplicationTemplateTerraformCloudWorkspaceDetails;
  /**
  * Terraform Cloud No-Code Module details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}
  */
  readonly terraformNoCodeModule: WaypointApplicationTemplateTerraformNoCodeModule;
}
export interface WaypointApplicationTemplateTerraformCloudWorkspaceDetails {
  /**
  * Name of the Terraform Cloud Workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}
  */
  readonly name: string;
  /**
  * Terraform Cloud Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}
  */
  readonly terraformProjectId: string;
}

export function waypointApplicationTemplateTerraformCloudWorkspaceDetailsToTerraform(struct?: WaypointApplicationTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    terraform_project_id: cdktf.stringToTerraform(struct!.terraformProjectId),
  }
}


export function waypointApplicationTemplateTerraformCloudWorkspaceDetailsToHclTerraform(struct?: WaypointApplicationTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable): any {
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

export class WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaypointApplicationTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WaypointApplicationTemplateTerraformCloudWorkspaceDetails | cdktf.IResolvable | undefined) {
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
export interface WaypointApplicationTemplateTerraformNoCodeModule {
  /**
  * No-Code Module Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}
  */
  readonly source: string;
  /**
  * No-Code Module Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}
  */
  readonly version: string;
}

export function waypointApplicationTemplateTerraformNoCodeModuleToTerraform(struct?: WaypointApplicationTemplateTerraformNoCodeModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function waypointApplicationTemplateTerraformNoCodeModuleToHclTerraform(struct?: WaypointApplicationTemplateTerraformNoCodeModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaypointApplicationTemplateTerraformNoCodeModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaypointApplicationTemplateTerraformNoCodeModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointApplicationTemplateTerraformNoCodeModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._version = value.version;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template hcp_waypoint_application_template}
*/
export class WaypointApplicationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_application_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointApplicationTemplate to import
  * @param importFromId The id of the existing WaypointApplicationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointApplicationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_application_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/waypoint_application_template hcp_waypoint_application_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointApplicationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointApplicationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_application_template',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.86.0',
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
    this._terraformCloudWorkspaceDetails.internalValue = config.terraformCloudWorkspaceDetails;
    this._terraformNoCodeModule.internalValue = config.terraformNoCodeModule;
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

  // terraform_cloud_workspace_details - computed: false, optional: false, required: true
  private _terraformCloudWorkspaceDetails = new WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(this, "terraform_cloud_workspace_details");
  public get terraformCloudWorkspaceDetails() {
    return this._terraformCloudWorkspaceDetails;
  }
  public putTerraformCloudWorkspaceDetails(value: WaypointApplicationTemplateTerraformCloudWorkspaceDetails) {
    this._terraformCloudWorkspaceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformCloudWorkspaceDetailsInput() {
    return this._terraformCloudWorkspaceDetails.internalValue;
  }

  // terraform_no_code_module - computed: false, optional: false, required: true
  private _terraformNoCodeModule = new WaypointApplicationTemplateTerraformNoCodeModuleOutputReference(this, "terraform_no_code_module");
  public get terraformNoCodeModule() {
    return this._terraformNoCodeModule;
  }
  public putTerraformNoCodeModule(value: WaypointApplicationTemplateTerraformNoCodeModule) {
    this._terraformNoCodeModule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformNoCodeModuleInput() {
    return this._terraformNoCodeModule.internalValue;
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
      terraform_cloud_workspace_details: waypointApplicationTemplateTerraformCloudWorkspaceDetailsToTerraform(this._terraformCloudWorkspaceDetails.internalValue),
      terraform_no_code_module: waypointApplicationTemplateTerraformNoCodeModuleToTerraform(this._terraformNoCodeModule.internalValue),
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
      terraform_cloud_workspace_details: {
        value: waypointApplicationTemplateTerraformCloudWorkspaceDetailsToHclTerraform(this._terraformCloudWorkspaceDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaypointApplicationTemplateTerraformCloudWorkspaceDetails",
      },
      terraform_no_code_module: {
        value: waypointApplicationTemplateTerraformNoCodeModuleToHclTerraform(this._terraformNoCodeModule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaypointApplicationTemplateTerraformNoCodeModule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
