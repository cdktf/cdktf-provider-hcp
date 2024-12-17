/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultRadarIntegrationJiraConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Jira base URL. Example: https://acme.atlassian.net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#base_url VaultRadarIntegrationJiraConnection#base_url}
  */
  readonly baseUrl: string;
  /**
  * Jira user's email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#email VaultRadarIntegrationJiraConnection#email}
  */
  readonly email: string;
  /**
  * Name of connection. Name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#name VaultRadarIntegrationJiraConnection#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where Vault Radar is located. If not specified, the project specified in the HCP Provider config block will be used, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#project_id VaultRadarIntegrationJiraConnection#project_id}
  */
  readonly projectId?: string;
  /**
  * A Jira API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#token VaultRadarIntegrationJiraConnection#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection hcp_vault_radar_integration_jira_connection}
*/
export class VaultRadarIntegrationJiraConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_radar_integration_jira_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultRadarIntegrationJiraConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultRadarIntegrationJiraConnection to import
  * @param importFromId The id of the existing VaultRadarIntegrationJiraConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultRadarIntegrationJiraConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_radar_integration_jira_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_radar_integration_jira_connection hcp_vault_radar_integration_jira_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultRadarIntegrationJiraConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VaultRadarIntegrationJiraConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_radar_integration_jira_connection',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.101.0',
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
    this._baseUrl = config.baseUrl;
    this._email = config.email;
    this._name = config.name;
    this._projectId = config.projectId;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
