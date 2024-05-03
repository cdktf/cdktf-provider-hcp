/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointAddOnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Application that this Add-on is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on#application_id WaypointAddOn#application_id}
  */
  readonly applicationId: string;
  /**
  * The ID of the Add-on Definition that this Add-on is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on#definition_id WaypointAddOn#definition_id}
  */
  readonly definitionId: string;
  /**
  * The name of the Add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint AddOn is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on#project_id WaypointAddOn#project_id}
  */
  readonly projectId?: string;
}
export interface WaypointAddOnTerraformNoCodeModule {
}

export function waypointAddOnTerraformNoCodeModuleToTerraform(struct?: WaypointAddOnTerraformNoCodeModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function waypointAddOnTerraformNoCodeModuleToHclTerraform(struct?: WaypointAddOnTerraformNoCodeModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WaypointAddOnTerraformNoCodeModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaypointAddOnTerraformNoCodeModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointAddOnTerraformNoCodeModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on hcp_waypoint_add_on}
*/
export class WaypointAddOn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_add_on";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointAddOn to import
  * @param importFromId The id of the existing WaypointAddOn that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointAddOn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_add_on", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_add_on hcp_waypoint_add_on} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointAddOnConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointAddOnConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_add_on',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.88.0',
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
    this._applicationId = config.applicationId;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // definition_id - computed: false, optional: false, required: true
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_count - computed: true, optional: false, required: false
  public get installCount() {
    return this.getNumberAttribute('install_count');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
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

  // readme_markdown - computed: true, optional: false, required: false
  public get readmeMarkdown() {
    return this.getStringAttribute('readme_markdown');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // terraform_no_code_module - computed: true, optional: false, required: false
  private _terraformNoCodeModule = new WaypointAddOnTerraformNoCodeModuleOutputReference(this, "terraform_no_code_module");
  public get terraformNoCodeModule() {
    return this._terraformNoCodeModule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
