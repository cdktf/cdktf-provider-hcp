/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The principal to bind to the given role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding#principal_id ProjectIamBinding#principal_id}
  */
  readonly principalId: string;
  /**
  * The ID of the HCP project to apply the IAM Policy to. If unspecified, the project configured on the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding#project_id ProjectIamBinding#project_id}
  */
  readonly projectId?: string;
  /**
  * The role name to bind to the given principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding#role ProjectIamBinding#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding hcp_project_iam_binding}
*/
export class ProjectIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_project_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIamBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIamBinding to import
  * @param importFromId The id of the existing ProjectIamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_project_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/project_iam_binding hcp_project_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_project_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.78.0',
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
    this._principalId = config.principalId;
    this._projectId = config.projectId;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // project_id - computed: false, optional: true, required: false
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principal_id: cdktf.stringToTerraform(this._principalId),
      project_id: cdktf.stringToTerraform(this._projectId),
      role: cdktf.stringToTerraform(this._role),
    };
  }
}
