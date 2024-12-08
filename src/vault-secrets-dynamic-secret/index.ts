/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsDynamicSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Vault Secrets application name that owns the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#app_name VaultSecretsDynamicSecret#app_name}
  */
  readonly appName: string;
  /**
  * AWS configuration to generate dynamic credentials by assuming an IAM role. Required if `secret_provider` is `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#aws_assume_role VaultSecretsDynamicSecret#aws_assume_role}
  */
  readonly awsAssumeRole?: VaultSecretsDynamicSecretAwsAssumeRole;
  /**
  * TTL the generated credentials will be valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#default_ttl VaultSecretsDynamicSecret#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * GCP configuration to generate dynamic credentials by impersonating a service account. Required if `secret_provider` is `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#gcp_impersonate_service_account VaultSecretsDynamicSecret#gcp_impersonate_service_account}
  */
  readonly gcpImpersonateServiceAccount?: VaultSecretsDynamicSecretGcpImpersonateServiceAccount;
  /**
  * The Vault Secrets integration name with the capability to manage the secret's lifecycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#integration_name VaultSecretsDynamicSecret#integration_name}
  */
  readonly integrationName: string;
  /**
  * The Vault Secrets secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#name VaultSecretsDynamicSecret#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#project_id VaultSecretsDynamicSecret#project_id}
  */
  readonly projectId?: string;
  /**
  * The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#secret_provider VaultSecretsDynamicSecret#secret_provider}
  */
  readonly secretProvider: string;
}
export interface VaultSecretsDynamicSecretAwsAssumeRole {
  /**
  * AWS IAM role ARN to assume when generating credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#iam_role_arn VaultSecretsDynamicSecret#iam_role_arn}
  */
  readonly iamRoleArn: string;
}

export function vaultSecretsDynamicSecretAwsAssumeRoleToTerraform(struct?: VaultSecretsDynamicSecretAwsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
  }
}


export function vaultSecretsDynamicSecretAwsAssumeRoleToHclTerraform(struct?: VaultSecretsDynamicSecretAwsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsDynamicSecretAwsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsDynamicSecretAwsAssumeRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsDynamicSecretAwsAssumeRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRoleArn = value.iamRoleArn;
    }
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }
}
export interface VaultSecretsDynamicSecretGcpImpersonateServiceAccount {
  /**
  * GCP service account email to impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#service_account_email VaultSecretsDynamicSecret#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function vaultSecretsDynamicSecretGcpImpersonateServiceAccountToTerraform(struct?: VaultSecretsDynamicSecretGcpImpersonateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function vaultSecretsDynamicSecretGcpImpersonateServiceAccountToHclTerraform(struct?: VaultSecretsDynamicSecretGcpImpersonateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsDynamicSecretGcpImpersonateServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsDynamicSecretGcpImpersonateServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}
*/
export class VaultSecretsDynamicSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_dynamic_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsDynamicSecret to import
  * @param importFromId The id of the existing VaultSecretsDynamicSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsDynamicSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_dynamic_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsDynamicSecretConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsDynamicSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_dynamic_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.100.0',
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
    this._appName = config.appName;
    this._awsAssumeRole.internalValue = config.awsAssumeRole;
    this._defaultTtl = config.defaultTtl;
    this._gcpImpersonateServiceAccount.internalValue = config.gcpImpersonateServiceAccount;
    this._integrationName = config.integrationName;
    this._name = config.name;
    this._projectId = config.projectId;
    this._secretProvider = config.secretProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // aws_assume_role - computed: false, optional: true, required: false
  private _awsAssumeRole = new VaultSecretsDynamicSecretAwsAssumeRoleOutputReference(this, "aws_assume_role");
  public get awsAssumeRole() {
    return this._awsAssumeRole;
  }
  public putAwsAssumeRole(value: VaultSecretsDynamicSecretAwsAssumeRole) {
    this._awsAssumeRole.internalValue = value;
  }
  public resetAwsAssumeRole() {
    this._awsAssumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleInput() {
    return this._awsAssumeRole.internalValue;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // gcp_impersonate_service_account - computed: false, optional: true, required: false
  private _gcpImpersonateServiceAccount = new VaultSecretsDynamicSecretGcpImpersonateServiceAccountOutputReference(this, "gcp_impersonate_service_account");
  public get gcpImpersonateServiceAccount() {
    return this._gcpImpersonateServiceAccount;
  }
  public putGcpImpersonateServiceAccount(value: VaultSecretsDynamicSecretGcpImpersonateServiceAccount) {
    this._gcpImpersonateServiceAccount.internalValue = value;
  }
  public resetGcpImpersonateServiceAccount() {
    this._gcpImpersonateServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpImpersonateServiceAccountInput() {
    return this._gcpImpersonateServiceAccount.internalValue;
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
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

  // secret_provider - computed: false, optional: false, required: true
  private _secretProvider?: string; 
  public get secretProvider() {
    return this.getStringAttribute('secret_provider');
  }
  public set secretProvider(value: string) {
    this._secretProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretProviderInput() {
    return this._secretProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      aws_assume_role: vaultSecretsDynamicSecretAwsAssumeRoleToTerraform(this._awsAssumeRole.internalValue),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      gcp_impersonate_service_account: vaultSecretsDynamicSecretGcpImpersonateServiceAccountToTerraform(this._gcpImpersonateServiceAccount.internalValue),
      integration_name: cdktf.stringToTerraform(this._integrationName),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_provider: cdktf.stringToTerraform(this._secretProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_assume_role: {
        value: vaultSecretsDynamicSecretAwsAssumeRoleToHclTerraform(this._awsAssumeRole.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsDynamicSecretAwsAssumeRole",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_impersonate_service_account: {
        value: vaultSecretsDynamicSecretGcpImpersonateServiceAccountToHclTerraform(this._gcpImpersonateServiceAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsDynamicSecretGcpImpersonateServiceAccount",
      },
      integration_name: {
        value: cdktf.stringToHclTerraform(this._integrationName),
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
      secret_provider: {
        value: cdktf.stringToHclTerraform(this._secretProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
