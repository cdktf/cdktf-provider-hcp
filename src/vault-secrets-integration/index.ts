/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#aws_access_keys VaultSecretsIntegration#aws_access_keys}
  */
  readonly awsAccessKeys?: VaultSecretsIntegrationAwsAccessKeys;
  /**
  * (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#aws_federated_workload_identity VaultSecretsIntegration#aws_federated_workload_identity}
  */
  readonly awsFederatedWorkloadIdentity?: VaultSecretsIntegrationAwsFederatedWorkloadIdentity;
  /**
  * Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#azure_client_secret VaultSecretsIntegration#azure_client_secret}
  */
  readonly azureClientSecret?: VaultSecretsIntegrationAzureClientSecret;
  /**
  * (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#azure_federated_workload_identity VaultSecretsIntegration#azure_federated_workload_identity}
  */
  readonly azureFederatedWorkloadIdentity?: VaultSecretsIntegrationAzureFederatedWorkloadIdentity;
  /**
  * Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#capabilities VaultSecretsIntegration#capabilities}
  */
  readonly capabilities: string[];
  /**
  * Confluent API key used to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#confluent_static_credentials VaultSecretsIntegration#confluent_static_credentials}
  */
  readonly confluentStaticCredentials?: VaultSecretsIntegrationConfluentStaticCredentials;
  /**
  * (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#gcp_federated_workload_identity VaultSecretsIntegration#gcp_federated_workload_identity}
  */
  readonly gcpFederatedWorkloadIdentity?: VaultSecretsIntegrationGcpFederatedWorkloadIdentity;
  /**
  * GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#gcp_service_account_key VaultSecretsIntegration#gcp_service_account_key}
  */
  readonly gcpServiceAccountKey?: VaultSecretsIntegrationGcpServiceAccountKey;
  /**
  * MongoDB Atlas API key used to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#mongodb_atlas_static_credentials VaultSecretsIntegration#mongodb_atlas_static_credentials}
  */
  readonly mongodbAtlasStaticCredentials?: VaultSecretsIntegrationMongodbAtlasStaticCredentials;
  /**
  * The Vault Secrets integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#name VaultSecretsIntegration#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#project_id VaultSecretsIntegration#project_id}
  */
  readonly projectId?: string;
  /**
  * The provider or 3rd party platform the integration is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#provider_type VaultSecretsIntegration#provider_type}
  */
  readonly providerType: string;
  /**
  * Twilio API key parts used to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#twilio_static_credentials VaultSecretsIntegration#twilio_static_credentials}
  */
  readonly twilioStaticCredentials?: VaultSecretsIntegrationTwilioStaticCredentials;
}
export interface VaultSecretsIntegrationAwsAccessKeys {
  /**
  * Key ID used with the secret key to authenticate against the target AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#access_key_id VaultSecretsIntegration#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Secret key used with the key ID to authenticate against the target AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#secret_access_key VaultSecretsIntegration#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function vaultSecretsIntegrationAwsAccessKeysToTerraform(struct?: VaultSecretsIntegrationAwsAccessKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function vaultSecretsIntegrationAwsAccessKeysToHclTerraform(struct?: VaultSecretsIntegrationAwsAccessKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationAwsAccessKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAwsAccessKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationAwsAccessKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface VaultSecretsIntegrationAwsFederatedWorkloadIdentity {
  /**
  * Audience configured on the AWS IAM identity provider to federate access with HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}
  */
  readonly audience: string;
  /**
  * AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#role_arn VaultSecretsIntegration#role_arn}
  */
  readonly roleArn: string;
}

export function vaultSecretsIntegrationAwsFederatedWorkloadIdentityToTerraform(struct?: VaultSecretsIntegrationAwsFederatedWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function vaultSecretsIntegrationAwsFederatedWorkloadIdentityToHclTerraform(struct?: VaultSecretsIntegrationAwsFederatedWorkloadIdentity | cdktf.IResolvable): any {
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAwsFederatedWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsIntegrationAwsFederatedWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._roleArn = value.roleArn;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface VaultSecretsIntegrationAzureClientSecret {
  /**
  * Azure client ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}
  */
  readonly clientId: string;
  /**
  * Secret value corresponding to the Azure client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#client_secret VaultSecretsIntegration#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Azure tenant ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}
  */
  readonly tenantId: string;
}

export function vaultSecretsIntegrationAzureClientSecretToTerraform(struct?: VaultSecretsIntegrationAzureClientSecret | cdktf.IResolvable): any {
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


export function vaultSecretsIntegrationAzureClientSecretToHclTerraform(struct?: VaultSecretsIntegrationAzureClientSecret | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationAzureClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAzureClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationAzureClientSecret | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationAzureFederatedWorkloadIdentity {
  /**
  * Audience configured on the Azure federated identity credentials to federate access with HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}
  */
  readonly audience: string;
  /**
  * Azure client ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}
  */
  readonly clientId: string;
  /**
  * Azure tenant ID corresponding to the Azure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}
  */
  readonly tenantId: string;
}

export function vaultSecretsIntegrationAzureFederatedWorkloadIdentityToTerraform(struct?: VaultSecretsIntegrationAzureFederatedWorkloadIdentity | cdktf.IResolvable): any {
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


export function vaultSecretsIntegrationAzureFederatedWorkloadIdentityToHclTerraform(struct?: VaultSecretsIntegrationAzureFederatedWorkloadIdentity | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationAzureFederatedWorkloadIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentity | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationConfluentStaticCredentials {
  /**
  * Public key used alongside the private key to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#cloud_api_key_id VaultSecretsIntegration#cloud_api_key_id}
  */
  readonly cloudApiKeyId: string;
  /**
  * Private key used alongside the public key to authenticate for cloud apis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#cloud_api_secret VaultSecretsIntegration#cloud_api_secret}
  */
  readonly cloudApiSecret: string;
}

export function vaultSecretsIntegrationConfluentStaticCredentialsToTerraform(struct?: VaultSecretsIntegrationConfluentStaticCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_api_key_id: cdktf.stringToTerraform(struct!.cloudApiKeyId),
    cloud_api_secret: cdktf.stringToTerraform(struct!.cloudApiSecret),
  }
}


export function vaultSecretsIntegrationConfluentStaticCredentialsToHclTerraform(struct?: VaultSecretsIntegrationConfluentStaticCredentials | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationConfluentStaticCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationConfluentStaticCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationConfluentStaticCredentials | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationGcpFederatedWorkloadIdentity {
  /**
  * Audience configured on the GCP identity provider to federate access with HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}
  */
  readonly audience: string;
  /**
  * GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#service_account_email VaultSecretsIntegration#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function vaultSecretsIntegrationGcpFederatedWorkloadIdentityToTerraform(struct?: VaultSecretsIntegrationGcpFederatedWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function vaultSecretsIntegrationGcpFederatedWorkloadIdentityToHclTerraform(struct?: VaultSecretsIntegrationGcpFederatedWorkloadIdentity | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationGcpFederatedWorkloadIdentity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentity | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationGcpServiceAccountKey {
  /**
  * JSON or base64 encoded service account key received from GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#credentials VaultSecretsIntegration#credentials}
  */
  readonly credentials: string;
}

export function vaultSecretsIntegrationGcpServiceAccountKeyToTerraform(struct?: VaultSecretsIntegrationGcpServiceAccountKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
  }
}


export function vaultSecretsIntegrationGcpServiceAccountKeyToHclTerraform(struct?: VaultSecretsIntegrationGcpServiceAccountKey | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationGcpServiceAccountKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationGcpServiceAccountKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationGcpServiceAccountKey | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationMongodbAtlasStaticCredentials {
  /**
  * Private key used alongside the public key to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#api_private_key VaultSecretsIntegration#api_private_key}
  */
  readonly apiPrivateKey: string;
  /**
  * Public key used alongside the private key to authenticate against the target project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#api_public_key VaultSecretsIntegration#api_public_key}
  */
  readonly apiPublicKey: string;
}

export function vaultSecretsIntegrationMongodbAtlasStaticCredentialsToTerraform(struct?: VaultSecretsIntegrationMongodbAtlasStaticCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_private_key: cdktf.stringToTerraform(struct!.apiPrivateKey),
    api_public_key: cdktf.stringToTerraform(struct!.apiPublicKey),
  }
}


export function vaultSecretsIntegrationMongodbAtlasStaticCredentialsToHclTerraform(struct?: VaultSecretsIntegrationMongodbAtlasStaticCredentials | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationMongodbAtlasStaticCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationMongodbAtlasStaticCredentials | cdktf.IResolvable | undefined) {
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
export interface VaultSecretsIntegrationTwilioStaticCredentials {
  /**
  * Account SID for the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#account_sid VaultSecretsIntegration#account_sid}
  */
  readonly accountSid: string;
  /**
  * Api key secret used with the api key SID to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#api_key_secret VaultSecretsIntegration#api_key_secret}
  */
  readonly apiKeySecret: string;
  /**
  * Api key SID to authenticate against the target Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#api_key_sid VaultSecretsIntegration#api_key_sid}
  */
  readonly apiKeySid: string;
}

export function vaultSecretsIntegrationTwilioStaticCredentialsToTerraform(struct?: VaultSecretsIntegrationTwilioStaticCredentials | cdktf.IResolvable): any {
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


export function vaultSecretsIntegrationTwilioStaticCredentialsToHclTerraform(struct?: VaultSecretsIntegrationTwilioStaticCredentials | cdktf.IResolvable): any {
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

export class VaultSecretsIntegrationTwilioStaticCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsIntegrationTwilioStaticCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VaultSecretsIntegrationTwilioStaticCredentials | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration hcp_vault_secrets_integration}
*/
export class VaultSecretsIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsIntegration to import
  * @param importFromId The id of the existing VaultSecretsIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration hcp_vault_secrets_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_integration',
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
    this._awsAccessKeys.internalValue = config.awsAccessKeys;
    this._awsFederatedWorkloadIdentity.internalValue = config.awsFederatedWorkloadIdentity;
    this._azureClientSecret.internalValue = config.azureClientSecret;
    this._azureFederatedWorkloadIdentity.internalValue = config.azureFederatedWorkloadIdentity;
    this._capabilities = config.capabilities;
    this._confluentStaticCredentials.internalValue = config.confluentStaticCredentials;
    this._gcpFederatedWorkloadIdentity.internalValue = config.gcpFederatedWorkloadIdentity;
    this._gcpServiceAccountKey.internalValue = config.gcpServiceAccountKey;
    this._mongodbAtlasStaticCredentials.internalValue = config.mongodbAtlasStaticCredentials;
    this._name = config.name;
    this._projectId = config.projectId;
    this._providerType = config.providerType;
    this._twilioStaticCredentials.internalValue = config.twilioStaticCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_keys - computed: false, optional: true, required: false
  private _awsAccessKeys = new VaultSecretsIntegrationAwsAccessKeysOutputReference(this, "aws_access_keys");
  public get awsAccessKeys() {
    return this._awsAccessKeys;
  }
  public putAwsAccessKeys(value: VaultSecretsIntegrationAwsAccessKeys) {
    this._awsAccessKeys.internalValue = value;
  }
  public resetAwsAccessKeys() {
    this._awsAccessKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeysInput() {
    return this._awsAccessKeys.internalValue;
  }

  // aws_federated_workload_identity - computed: false, optional: true, required: false
  private _awsFederatedWorkloadIdentity = new VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference(this, "aws_federated_workload_identity");
  public get awsFederatedWorkloadIdentity() {
    return this._awsFederatedWorkloadIdentity;
  }
  public putAwsFederatedWorkloadIdentity(value: VaultSecretsIntegrationAwsFederatedWorkloadIdentity) {
    this._awsFederatedWorkloadIdentity.internalValue = value;
  }
  public resetAwsFederatedWorkloadIdentity() {
    this._awsFederatedWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsFederatedWorkloadIdentityInput() {
    return this._awsFederatedWorkloadIdentity.internalValue;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret = new VaultSecretsIntegrationAzureClientSecretOutputReference(this, "azure_client_secret");
  public get azureClientSecret() {
    return this._azureClientSecret;
  }
  public putAzureClientSecret(value: VaultSecretsIntegrationAzureClientSecret) {
    this._azureClientSecret.internalValue = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret.internalValue;
  }

  // azure_federated_workload_identity - computed: false, optional: true, required: false
  private _azureFederatedWorkloadIdentity = new VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference(this, "azure_federated_workload_identity");
  public get azureFederatedWorkloadIdentity() {
    return this._azureFederatedWorkloadIdentity;
  }
  public putAzureFederatedWorkloadIdentity(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentity) {
    this._azureFederatedWorkloadIdentity.internalValue = value;
  }
  public resetAzureFederatedWorkloadIdentity() {
    this._azureFederatedWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFederatedWorkloadIdentityInput() {
    return this._azureFederatedWorkloadIdentity.internalValue;
  }

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

  // confluent_static_credentials - computed: false, optional: true, required: false
  private _confluentStaticCredentials = new VaultSecretsIntegrationConfluentStaticCredentialsOutputReference(this, "confluent_static_credentials");
  public get confluentStaticCredentials() {
    return this._confluentStaticCredentials;
  }
  public putConfluentStaticCredentials(value: VaultSecretsIntegrationConfluentStaticCredentials) {
    this._confluentStaticCredentials.internalValue = value;
  }
  public resetConfluentStaticCredentials() {
    this._confluentStaticCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentStaticCredentialsInput() {
    return this._confluentStaticCredentials.internalValue;
  }

  // gcp_federated_workload_identity - computed: false, optional: true, required: false
  private _gcpFederatedWorkloadIdentity = new VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference(this, "gcp_federated_workload_identity");
  public get gcpFederatedWorkloadIdentity() {
    return this._gcpFederatedWorkloadIdentity;
  }
  public putGcpFederatedWorkloadIdentity(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentity) {
    this._gcpFederatedWorkloadIdentity.internalValue = value;
  }
  public resetGcpFederatedWorkloadIdentity() {
    this._gcpFederatedWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFederatedWorkloadIdentityInput() {
    return this._gcpFederatedWorkloadIdentity.internalValue;
  }

  // gcp_service_account_key - computed: false, optional: true, required: false
  private _gcpServiceAccountKey = new VaultSecretsIntegrationGcpServiceAccountKeyOutputReference(this, "gcp_service_account_key");
  public get gcpServiceAccountKey() {
    return this._gcpServiceAccountKey;
  }
  public putGcpServiceAccountKey(value: VaultSecretsIntegrationGcpServiceAccountKey) {
    this._gcpServiceAccountKey.internalValue = value;
  }
  public resetGcpServiceAccountKey() {
    this._gcpServiceAccountKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountKeyInput() {
    return this._gcpServiceAccountKey.internalValue;
  }

  // mongodb_atlas_static_credentials - computed: false, optional: true, required: false
  private _mongodbAtlasStaticCredentials = new VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference(this, "mongodb_atlas_static_credentials");
  public get mongodbAtlasStaticCredentials() {
    return this._mongodbAtlasStaticCredentials;
  }
  public putMongodbAtlasStaticCredentials(value: VaultSecretsIntegrationMongodbAtlasStaticCredentials) {
    this._mongodbAtlasStaticCredentials.internalValue = value;
  }
  public resetMongodbAtlasStaticCredentials() {
    this._mongodbAtlasStaticCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasStaticCredentialsInput() {
    return this._mongodbAtlasStaticCredentials.internalValue;
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

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // twilio_static_credentials - computed: false, optional: true, required: false
  private _twilioStaticCredentials = new VaultSecretsIntegrationTwilioStaticCredentialsOutputReference(this, "twilio_static_credentials");
  public get twilioStaticCredentials() {
    return this._twilioStaticCredentials;
  }
  public putTwilioStaticCredentials(value: VaultSecretsIntegrationTwilioStaticCredentials) {
    this._twilioStaticCredentials.internalValue = value;
  }
  public resetTwilioStaticCredentials() {
    this._twilioStaticCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioStaticCredentialsInput() {
    return this._twilioStaticCredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_keys: vaultSecretsIntegrationAwsAccessKeysToTerraform(this._awsAccessKeys.internalValue),
      aws_federated_workload_identity: vaultSecretsIntegrationAwsFederatedWorkloadIdentityToTerraform(this._awsFederatedWorkloadIdentity.internalValue),
      azure_client_secret: vaultSecretsIntegrationAzureClientSecretToTerraform(this._azureClientSecret.internalValue),
      azure_federated_workload_identity: vaultSecretsIntegrationAzureFederatedWorkloadIdentityToTerraform(this._azureFederatedWorkloadIdentity.internalValue),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      confluent_static_credentials: vaultSecretsIntegrationConfluentStaticCredentialsToTerraform(this._confluentStaticCredentials.internalValue),
      gcp_federated_workload_identity: vaultSecretsIntegrationGcpFederatedWorkloadIdentityToTerraform(this._gcpFederatedWorkloadIdentity.internalValue),
      gcp_service_account_key: vaultSecretsIntegrationGcpServiceAccountKeyToTerraform(this._gcpServiceAccountKey.internalValue),
      mongodb_atlas_static_credentials: vaultSecretsIntegrationMongodbAtlasStaticCredentialsToTerraform(this._mongodbAtlasStaticCredentials.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_type: cdktf.stringToTerraform(this._providerType),
      twilio_static_credentials: vaultSecretsIntegrationTwilioStaticCredentialsToTerraform(this._twilioStaticCredentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_keys: {
        value: vaultSecretsIntegrationAwsAccessKeysToHclTerraform(this._awsAccessKeys.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAwsAccessKeys",
      },
      aws_federated_workload_identity: {
        value: vaultSecretsIntegrationAwsFederatedWorkloadIdentityToHclTerraform(this._awsFederatedWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAwsFederatedWorkloadIdentity",
      },
      azure_client_secret: {
        value: vaultSecretsIntegrationAzureClientSecretToHclTerraform(this._azureClientSecret.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAzureClientSecret",
      },
      azure_federated_workload_identity: {
        value: vaultSecretsIntegrationAzureFederatedWorkloadIdentityToHclTerraform(this._azureFederatedWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationAzureFederatedWorkloadIdentity",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      confluent_static_credentials: {
        value: vaultSecretsIntegrationConfluentStaticCredentialsToHclTerraform(this._confluentStaticCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationConfluentStaticCredentials",
      },
      gcp_federated_workload_identity: {
        value: vaultSecretsIntegrationGcpFederatedWorkloadIdentityToHclTerraform(this._gcpFederatedWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationGcpFederatedWorkloadIdentity",
      },
      gcp_service_account_key: {
        value: vaultSecretsIntegrationGcpServiceAccountKeyToHclTerraform(this._gcpServiceAccountKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationGcpServiceAccountKey",
      },
      mongodb_atlas_static_credentials: {
        value: vaultSecretsIntegrationMongodbAtlasStaticCredentialsToHclTerraform(this._mongodbAtlasStaticCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationMongodbAtlasStaticCredentials",
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
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      twilio_static_credentials: {
        value: vaultSecretsIntegrationTwilioStaticCredentialsToHclTerraform(this._twilioStaticCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsIntegrationTwilioStaticCredentials",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
