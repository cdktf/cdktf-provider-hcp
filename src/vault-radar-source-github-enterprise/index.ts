// https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultRadarSourceGithubEnterpriseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fully qualified domain name of the server. (Example: myserver.acme.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise#domain_name VaultRadarSourceGithubEnterprise#domain_name}
  */
  readonly domainName: string;
  /**
  * GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise#github_organization VaultRadarSourceGithubEnterprise#github_organization}
  */
  readonly githubOrganization: string;
  /**
  * The ID of the HCP project where Vault Radar is located. If not specified, the project specified in the HCP Provider config block will be used, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise#project_id VaultRadarSourceGithubEnterprise#project_id}
  */
  readonly projectId?: string;
  /**
  * GitHub personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise#token VaultRadarSourceGithubEnterprise#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise hcp_vault_radar_source_github_enterprise}
*/
export class VaultRadarSourceGithubEnterprise extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_radar_source_github_enterprise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultRadarSourceGithubEnterprise to import
  * @param importFromId The id of the existing VaultRadarSourceGithubEnterprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultRadarSourceGithubEnterprise to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_radar_source_github_enterprise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_radar_source_github_enterprise hcp_vault_radar_source_github_enterprise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultRadarSourceGithubEnterpriseConfig
  */
  public constructor(scope: Construct, id: string, config: VaultRadarSourceGithubEnterpriseConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_radar_source_github_enterprise',
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
    this._domainName = config.domainName;
    this._githubOrganization = config.githubOrganization;
    this._projectId = config.projectId;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

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
      domain_name: cdktf.stringToTerraform(this._domainName),
      github_organization: cdktf.stringToTerraform(this._githubOrganization),
      project_id: cdktf.stringToTerraform(this._projectId),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
