// https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#capabilities VaultSecretsIntegrationAzure#capabilities}
  */
  readonly capabilities: string[];
  /**
  * Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}
  */
  readonly clientSecret?: VaultSecretsIntegrationAzureClientSecretA;
  /**
  * (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#federated_workload_identity VaultSecretsIntegrationAzure#federated_workload_identity}
  */
  readonly federatedWorkloadIdentity?: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA;
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#name VaultSecretsIntegrationAzure#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#project_id VaultSecretsIntegrationAzure#project_id}
  */
  readonly projectId?: string;
}
export interface VaultSecretsIntegrationAzureClientSecretA {
  /**
  * Azure client ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}
  */
  readonly clientId: string;
  /**
  * Secret value corresponding to the Azure client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Azure tenant ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}
  */
  readonly tenantId: string;
}

export function vaultSecretsIntegrationAzureClientSecretAToTerraform(struct?: VaultSecretsIntegrationAzureClientSecretA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function vaultSecretsIntegrationAzureClientSecretAToHclTerraform(struct?: VaultSecretsIntegrationAzureClientSecretA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationAzureClientSecretAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAzureClientSecretA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationAzureClientSecretA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface VaultSecretsIntegrationAzureFederatedWorkloadIdentityA {
  /**
  * Audience configured on the Azure federated identity credentials to federate access with HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#audience VaultSecretsIntegrationAzure#audience}
  */
  readonly audience: string;
  /**
  * Azure client ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}
  */
  readonly clientId: string;
  /**
  * Azure tenant ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}
  */
  readonly tenantId: string;
}

export function vaultSecretsIntegrationAzureFederatedWorkloadIdentityAToTerraform(struct?: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function vaultSecretsIntegrationAzureFederatedWorkloadIdentityAToHclTerraform(struct?: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA | cdktf.IResolvable): any {
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
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAzureFederatedWorkloadIdentityA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._tenantId = value.tenantId;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure hcp_vault_secrets_integration_azure}
*/
export class VaultSecretsIntegrationAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegrationAzure to import
  * @param importFromId The id of the existing VaultSecretsIntegrationAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegrationAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure hcp_vault_secrets_integration_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationAzureConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration_azure',
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
    this._clientSecret.internalValue = config.clientSecret;
    this._federatedWorkloadIdentity.internalValue = config.federatedWorkloadIdentity;
    this._name = config.name;
    this._projectId = config.projectId;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new VaultSecretsIntegrationAzureClientSecretAOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: VaultSecretsIntegrationAzureClientSecretA) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // federated_workload_identity - computed: false, optional: true, required: false
  private _federatedWorkloadIdentity = new VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference(this, "federated_workload_identity");
  public get federatedWorkloadIdentity() {
    return this._federatedWorkloadIdentity;
  }
  public putFederatedWorkloadIdentity(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      client_secret: vaultSecretsIntegrationAzureClientSecretAToTerraform(this._clientSecret.internalValue),
      federated_workload_identity: vaultSecretsIntegrationAzureFederatedWorkloadIdentityAToTerraform(this._federatedWorkloadIdentity.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      client_secret: {
        value: vaultSecretsIntegrationAzureClientSecretAToHclTerraform(this._clientSecret.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAzureClientSecretA",
      },
      federated_workload_identity: {
        value: vaultSecretsIntegrationAzureFederatedWorkloadIdentityAToHclTerraform(this._federatedWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAzureFederatedWorkloadIdentityA",
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
