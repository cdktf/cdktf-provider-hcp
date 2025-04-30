/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationMongodbatlasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#capabilities VaultSecretsIntegrationMongodbatlas#capabilities}
  */
  readonly capabilities: string[];
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#name VaultSecretsIntegrationMongodbatlas#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#project_id VaultSecretsIntegrationMongodbatlas#project_id}
  */
  readonly projectId?: string;
  /**
  * MongoDB Atlas API key used to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#static_credential_details VaultSecretsIntegrationMongodbatlas#static_credential_details}
  */
  readonly staticCredentialDetails?: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails;
}
export interface VaultSecretsIntegrationMongodbatlasStaticCredentialDetails {
  /**
  * Private key used alongside the public key to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#api_private_key VaultSecretsIntegrationMongodbatlas#api_private_key}
  */
  readonly apiPrivateKey: string;
  /**
  * Public key used alongside the private key to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#api_public_key VaultSecretsIntegrationMongodbatlas#api_public_key}
  */
  readonly apiPublicKey: string;
}

export function vaultSecretsIntegrationMongodbatlasStaticCredentialDetailsToTerraform(struct?: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_private_key: cdktf.stringToTerraform(struct!.apiPrivateKey),
    api_public_key: cdktf.stringToTerraform(struct!.apiPublicKey),
  }
}


export function vaultSecretsIntegrationMongodbatlasStaticCredentialDetailsToHclTerraform(struct?: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_private_key: {
      value: cdktf.stringToHclTerraform(struct!.apiPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_public_key: {
      value: cdktf.stringToHclTerraform(struct!.apiPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationMongodbatlasStaticCredentialDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPrivateKey = this._apiPrivateKey;
    }
    if (this._apiPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPublicKey = this._apiPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPrivateKey = undefined;
      this._apiPublicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPrivateKey = value.apiPrivateKey;
      this._apiPublicKey = value.apiPublicKey;
    }
  }

  // api_private_key - computed: false, optional: false, required: true
  private _apiPrivateKey?: string; 
  public get apiPrivateKey() {
    return this.getStringAttribute('api_private_key');
  }
  public set apiPrivateKey(value: string) {
    this._apiPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPrivateKeyInput() {
    return this._apiPrivateKey;
  }

  // api_public_key - computed: false, optional: false, required: true
  private _apiPublicKey?: string; 
  public get apiPublicKey() {
    return this.getStringAttribute('api_public_key');
  }
  public set apiPublicKey(value: string) {
    this._apiPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPublicKeyInput() {
    return this._apiPublicKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas hcp_vault_secrets_integration_mongodbatlas}
*/
export class VaultSecretsIntegrationMongodbatlas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration_mongodbatlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegrationMongodbatlas to import
  * @param importFromId The id of the existing VaultSecretsIntegrationMongodbatlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegrationMongodbatlas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration_mongodbatlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_mongodbatlas hcp_vault_secrets_integration_mongodbatlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationMongodbatlasConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationMongodbatlasConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration_mongodbatlas',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.105.0',
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
  private _staticCredentialDetails = new VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference(this, "static_credential_details");
  public get staticCredentialDetails() {
    return this._staticCredentialDetails;
  }
  public putStaticCredentialDetails(value: VaultSecretsIntegrationMongodbatlasStaticCredentialDetails) {
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
      static_credential_details: vaultSecretsIntegrationMongodbatlasStaticCredentialDetailsToTerraform(this._staticCredentialDetails.internalValue),
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
        value: vaultSecretsIntegrationMongodbatlasStaticCredentialDetailsToHclTerraform(this._staticCredentialDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationMongodbatlasStaticCredentialDetails",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
