/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultRadarSourceGithubCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * GitHub organization Vault Radar will monitor. Example: type "octocat" for the org https://github.com/octocat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud#github_organization VaultRadarSourceGithubCloud#github_organization}
  */
  readonly githubOrganization: string;
  /**
  * The ID of the HCP project where Vault Radar is located. If not specified, the project specified in the HCP Provider config block will be used, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud#project_id VaultRadarSourceGithubCloud#project_id}
  */
  readonly projectId?: string;
  /**
  * GitHub personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud#token VaultRadarSourceGithubCloud#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud}
*/
export class VaultRadarSourceGithubCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_radar_source_github_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultRadarSourceGithubCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultRadarSourceGithubCloud to import
  * @param importFromId The id of the existing VaultRadarSourceGithubCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultRadarSourceGithubCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_radar_source_github_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_cloud hcp_vault_radar_source_github_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultRadarSourceGithubCloudConfig
  */
  public constructor(scope: Construct, id: string, config: VaultRadarSourceGithubCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_radar_source_github_cloud',
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
    this._githubOrganization = config.githubOrganization;
    this._projectId = config.projectId;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // github_organization - computed: false, optional: false, required: true
  private _githubOrganization?: string; 
  public get githubOrganization() {
    return this.getStringAttribute('github_organization');
  }
  public set githubOrganization(value: string) {
    this._githubOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization;
  }

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
      github_organization: cdktf.stringToTerraform(this._githubOrganization),
      project_id: cdktf.stringToTerraform(this._projectId),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      github_organization: {
        value: cdktf.stringToHclTerraform(this._githubOrganization),
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
