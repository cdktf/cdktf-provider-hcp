/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointTfcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Waypoint Project ID to associate with the TFC config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config#project_id WaypointTfcConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * The Terraform Cloud Organization with which the token is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config#tfc_org_name WaypointTfcConfig#tfc_org_name}
  */
  readonly tfcOrgName: string;
  /**
  * Terraform Cloud team token. The token must include permissions to manage workspaces and applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config#token WaypointTfcConfig#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config hcp_waypoint_tfc_config}
*/
export class WaypointTfcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_tfc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointTfcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointTfcConfig to import
  * @param importFromId The id of the existing WaypointTfcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointTfcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_tfc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/waypoint_tfc_config hcp_waypoint_tfc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointTfcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointTfcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_tfc_config',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.97.0',
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
    this._projectId = config.projectId;
    this._tfcOrgName = config.tfcOrgName;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tfc_org_name - computed: false, optional: false, required: true
  private _tfcOrgName?: string; 
  public get tfcOrgName() {
    return this.getStringAttribute('tfc_org_name');
  }
  public set tfcOrgName(value: string) {
    this._tfcOrgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tfcOrgNameInput() {
    return this._tfcOrgName;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      tfc_org_name: cdktf.stringToTerraform(this._tfcOrgName),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tfc_org_name: {
        value: cdktf.stringToHclTerraform(this._tfcOrgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
