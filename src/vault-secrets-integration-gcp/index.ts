/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#capabilities VaultSecretsIntegrationGcp#capabilities}
  */
  readonly capabilities: string[];
  /**
  * (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#federated_workload_identity VaultSecretsIntegrationGcp#federated_workload_identity}
  */
  readonly federatedWorkloadIdentity?: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA;
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#name VaultSecretsIntegrationGcp#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#project_id VaultSecretsIntegrationGcp#project_id}
  */
  readonly projectId?: string;
  /**
  * GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#service_account_key VaultSecretsIntegrationGcp#service_account_key}
  */
  readonly serviceAccountKey?: VaultSecretsIntegrationGcpServiceAccountKeyA;
}
export interface VaultSecretsIntegrationGcpFederatedWorkloadIdentityA {
  /**
  * Audience configured on the GCP identity provider to federate access with HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#audience VaultSecretsIntegrationGcp#audience}
  */
  readonly audience: string;
  /**
  * GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#service_account_email VaultSecretsIntegrationGcp#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function vaultSecretsIntegrationGcpFederatedWorkloadIdentityAToTerraform(struct?: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function vaultSecretsIntegrationGcpFederatedWorkloadIdentityAToHclTerraform(struct?: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationGcpFederatedWorkloadIdentityA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface VaultSecretsIntegrationGcpServiceAccountKeyA {
  /**
  * JSON or base64 encoded service account key received from GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#credentials VaultSecretsIntegrationGcp#credentials}
  */
  readonly credentials: string;
}

export function vaultSecretsIntegrationGcpServiceAccountKeyAToTerraform(struct?: VaultSecretsIntegrationGcpServiceAccountKeyA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
  }
}


export function vaultSecretsIntegrationGcpServiceAccountKeyAToHclTerraform(struct?: VaultSecretsIntegrationGcpServiceAccountKeyA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationGcpServiceAccountKeyA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationGcpServiceAccountKeyA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
    }
  }

  // client_email - computed: true, optional: false, required: false
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp hcp_vault_secrets_integration_gcp}
*/
export class VaultSecretsIntegrationGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegrationGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegrationGcp to import
  * @param importFromId The id of the existing VaultSecretsIntegrationGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegrationGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/resources/vault_secrets_integration_gcp hcp_vault_secrets_integration_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationGcpConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration_gcp',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.103.0',
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
    this._federatedWorkloadIdentity.internalValue = config.federatedWorkloadIdentity;
    this._name = config.name;
    this._projectId = config.projectId;
    this._serviceAccountKey.internalValue = config.serviceAccountKey;
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

  // federated_workload_identity - computed: false, optional: true, required: false
  private _federatedWorkloadIdentity = new VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference(this, "federated_workload_identity");
  public get federatedWorkloadIdentity() {
    return this._federatedWorkloadIdentity;
  }
  public putFederatedWorkloadIdentity(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA) {
    this._federatedWorkloadIdentity.internalValue = value;
  }
  public resetFederatedWorkloadIdentity() {
    this._federatedWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedWorkloadIdentityInput() {
    return this._federatedWorkloadIdentity.internalValue;
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

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey = new VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference(this, "service_account_key");
  public get serviceAccountKey() {
    return this._serviceAccountKey;
  }
  public putServiceAccountKey(value: VaultSecretsIntegrationGcpServiceAccountKeyA) {
    this._serviceAccountKey.internalValue = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      federated_workload_identity: vaultSecretsIntegrationGcpFederatedWorkloadIdentityAToTerraform(this._federatedWorkloadIdentity.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_account_key: vaultSecretsIntegrationGcpServiceAccountKeyAToTerraform(this._serviceAccountKey.internalValue),
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
      federated_workload_identity: {
        value: vaultSecretsIntegrationGcpFederatedWorkloadIdentityAToHclTerraform(this._federatedWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationGcpFederatedWorkloadIdentityA",
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
      service_account_key: {
        value: vaultSecretsIntegrationGcpServiceAccountKeyAToHclTerraform(this._serviceAccountKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationGcpServiceAccountKeyA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
