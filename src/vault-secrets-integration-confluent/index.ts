/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationConfluentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#capabilities VaultSecretsIntegrationConfluent#capabilities}
  */
  readonly capabilities: string[];
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#name VaultSecretsIntegrationConfluent#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#project_id VaultSecretsIntegrationConfluent#project_id}
  */
  readonly projectId?: string;
  /**
  * Confluent API key used to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#static_credential_details VaultSecretsIntegrationConfluent#static_credential_details}
  */
  readonly staticCredentialDetails?: VaultSecretsIntegrationConfluentStaticCredentialDetails;
}
export interface VaultSecretsIntegrationConfluentStaticCredentialDetails {
  /**
  * Public key used alongside the private key to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#cloud_api_key_id VaultSecretsIntegrationConfluent#cloud_api_key_id}
  */
  readonly cloudApiKeyId: string;
  /**
  * Private key used alongside the public key to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#cloud_api_secret VaultSecretsIntegrationConfluent#cloud_api_secret}
  */
  readonly cloudApiSecret: string;
}

export function vaultSecretsIntegrationConfluentStaticCredentialDetailsToTerraform(struct?: VaultSecretsIntegrationConfluentStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_api_key_id: cdktf.stringToTerraform(struct!.cloudApiKeyId),
    cloud_api_secret: cdktf.stringToTerraform(struct!.cloudApiSecret),
  }
}


export function vaultSecretsIntegrationConfluentStaticCredentialDetailsToHclTerraform(struct?: VaultSecretsIntegrationConfluentStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_api_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudApiKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_api_secret: {
      value: cdktf.stringToHclTerraform(struct!.cloudApiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationConfluentStaticCredentialDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudApiKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudApiKeyId = this._cloudApiKeyId;
    }
    if (this._cloudApiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudApiSecret = this._cloudApiSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationConfluentStaticCredentialDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudApiKeyId = undefined;
      this._cloudApiSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudApiKeyId = value.cloudApiKeyId;
      this._cloudApiSecret = value.cloudApiSecret;
    }
  }

  // cloud_api_key_id - computed: false, optional: false, required: true
  private _cloudApiKeyId?: string; 
  public get cloudApiKeyId() {
    return this.getStringAttribute('cloud_api_key_id');
  }
  public set cloudApiKeyId(value: string) {
    this._cloudApiKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiKeyIdInput() {
    return this._cloudApiKeyId;
  }

  // cloud_api_secret - computed: false, optional: false, required: true
  private _cloudApiSecret?: string; 
  public get cloudApiSecret() {
    return this.getStringAttribute('cloud_api_secret');
  }
  public set cloudApiSecret(value: string) {
    this._cloudApiSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiSecretInput() {
    return this._cloudApiSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent hcp_vault_secrets_integration_confluent}
*/
export class VaultSecretsIntegrationConfluent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration_confluent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegrationConfluent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegrationConfluent to import
  * @param importFromId The id of the existing VaultSecretsIntegrationConfluent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegrationConfluent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration_confluent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_confluent hcp_vault_secrets_integration_confluent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationConfluentConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationConfluentConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration_confluent',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.104.0',
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
    this._capabilities = config.capabilities;
    this._name = config.name;
    this._projectId = config.projectId;
    this._staticCredentialDetails.internalValue = config.staticCredentialDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // static_credential_details - computed: false, optional: true, required: false
  private _staticCredentialDetails = new VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference(this, "static_credential_details");
  public get staticCredentialDetails() {
    return this._staticCredentialDetails;
  }
  public putStaticCredentialDetails(value: VaultSecretsIntegrationConfluentStaticCredentialDetails) {
    this._staticCredentialDetails.internalValue = value;
  }
  public resetStaticCredentialDetails() {
    this._staticCredentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticCredentialDetailsInput() {
    return this._staticCredentialDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      static_credential_details: vaultSecretsIntegrationConfluentStaticCredentialDetailsToTerraform(this._staticCredentialDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
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
      static_credential_details: {
        value: vaultSecretsIntegrationConfluentStaticCredentialDetailsToHclTerraform(this._staticCredentialDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationConfluentStaticCredentialDetails",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
