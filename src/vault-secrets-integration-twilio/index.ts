/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationTwilioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#capabilities VaultSecretsIntegrationTwilio#capabilities}
  */
  readonly capabilities: string[];
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#name VaultSecretsIntegrationTwilio#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#project_id VaultSecretsIntegrationTwilio#project_id}
  */
  readonly projectId?: string;
  /**
  * Twilio API key parts used to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#static_credential_details VaultSecretsIntegrationTwilio#static_credential_details}
  */
  readonly staticCredentialDetails?: VaultSecretsIntegrationTwilioStaticCredentialDetails;
}
export interface VaultSecretsIntegrationTwilioStaticCredentialDetails {
  /**
  * Account SID for the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#account_sid VaultSecretsIntegrationTwilio#account_sid}
  */
  readonly accountSid: string;
  /**
  * Api key secret used with the api key SID to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#api_key_secret VaultSecretsIntegrationTwilio#api_key_secret}
  */
  readonly apiKeySecret: string;
  /**
  * Api key SID to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#api_key_sid VaultSecretsIntegrationTwilio#api_key_sid}
  */
  readonly apiKeySid: string;
}

export function vaultSecretsIntegrationTwilioStaticCredentialDetailsToTerraform(struct?: VaultSecretsIntegrationTwilioStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_sid: cdktf.stringToTerraform(struct!.accountSid),
    api_key_secret: cdktf.stringToTerraform(struct!.apiKeySecret),
    api_key_sid: cdktf.stringToTerraform(struct!.apiKeySid),
  }
}


export function vaultSecretsIntegrationTwilioStaticCredentialDetailsToHclTerraform(struct?: VaultSecretsIntegrationTwilioStaticCredentialDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_sid: {
      value: cdktf.stringToHclTerraform(struct!.accountSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_sid: {
      value: cdktf.stringToHclTerraform(struct!.apiKeySid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationTwilioStaticCredentialDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSid = this._accountSid;
    }
    if (this._apiKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecret = this._apiKeySecret;
    }
    if (this._apiKeySid !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySid = this._apiKeySid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationTwilioStaticCredentialDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountSid = undefined;
      this._apiKeySecret = undefined;
      this._apiKeySid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountSid = value.accountSid;
      this._apiKeySecret = value.apiKeySecret;
      this._apiKeySid = value.apiKeySid;
    }
  }

  // account_sid - computed: false, optional: false, required: true
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // api_key_secret - computed: false, optional: false, required: true
  private _apiKeySecret?: string; 
  public get apiKeySecret() {
    return this.getStringAttribute('api_key_secret');
  }
  public set apiKeySecret(value: string) {
    this._apiKeySecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretInput() {
    return this._apiKeySecret;
  }

  // api_key_sid - computed: false, optional: false, required: true
  private _apiKeySid?: string; 
  public get apiKeySid() {
    return this.getStringAttribute('api_key_sid');
  }
  public set apiKeySid(value: string) {
    this._apiKeySid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySidInput() {
    return this._apiKeySid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio hcp_vault_secrets_integration_twilio}
*/
export class VaultSecretsIntegrationTwilio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration_twilio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegrationTwilio to import
  * @param importFromId The id of the existing VaultSecretsIntegrationTwilio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegrationTwilio to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration_twilio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration_twilio hcp_vault_secrets_integration_twilio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationTwilioConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationTwilioConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration_twilio',
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
  private _staticCredentialDetails = new VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference(this, "static_credential_details");
  public get staticCredentialDetails() {
    return this._staticCredentialDetails;
  }
  public putStaticCredentialDetails(value: VaultSecretsIntegrationTwilioStaticCredentialDetails) {
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
      static_credential_details: vaultSecretsIntegrationTwilioStaticCredentialDetailsToTerraform(this._staticCredentialDetails.internalValue),
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
        value: vaultSecretsIntegrationTwilioStaticCredentialDetailsToHclTerraform(this._staticCredentialDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationTwilioStaticCredentialDetails",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
