/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultRadarSecretManagerVaultDedicatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the auth method has read and write access to the secrets engine. Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}
  */
  readonly accessReadWrite?: boolean | cdktf.IResolvable;
  /**
  * Configuration for AppRole Push-based authentication. Only one authentication method may be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}
  */
  readonly approlePush?: VaultRadarSecretManagerVaultDedicatedApprolePush;
  /**
  * Configuration for Kubernetes-based authentication. Only one authentication method may be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}
  */
  readonly kubernetes?: VaultRadarSecretManagerVaultDedicatedKubernetes;
  /**
  * The ID of the HCP project where Vault Radar is located. If not specified, the project specified in the HCP Provider config block will be used, if configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}
  */
  readonly projectId?: string;
  /**
  * Configuration for token-based authentication. Only one authentication method may be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}
  */
  readonly token?: VaultRadarSecretManagerVaultDedicatedToken;
  /**
  * Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}
  */
  readonly vaultUrl: string;
}
export interface VaultRadarSecretManagerVaultDedicatedApprolePush {
  /**
  * Mount path of the AppRole auth method in Vault. Example 'approle'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}
  */
  readonly mountPath: string;
  /**
  * Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}
  */
  readonly roleIdEnvVar: string;
  /**
  * Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}
  */
  readonly secretIdEnvVar: string;
}

export function vaultRadarSecretManagerVaultDedicatedApprolePushToTerraform(struct?: VaultRadarSecretManagerVaultDedicatedApprolePush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    role_id_env_var: cdktf.stringToTerraform(struct!.roleIdEnvVar),
    secret_id_env_var: cdktf.stringToTerraform(struct!.secretIdEnvVar),
  }
}


export function vaultRadarSecretManagerVaultDedicatedApprolePushToHclTerraform(struct?: VaultRadarSecretManagerVaultDedicatedApprolePush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id_env_var: {
      value: cdktf.stringToHclTerraform(struct!.roleIdEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id_env_var: {
      value: cdktf.stringToHclTerraform(struct!.secretIdEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultRadarSecretManagerVaultDedicatedApprolePush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._roleIdEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleIdEnvVar = this._roleIdEnvVar;
    }
    if (this._secretIdEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretIdEnvVar = this._secretIdEnvVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultRadarSecretManagerVaultDedicatedApprolePush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._roleIdEnvVar = undefined;
      this._secretIdEnvVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._roleIdEnvVar = value.roleIdEnvVar;
      this._secretIdEnvVar = value.secretIdEnvVar;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // role_id_env_var - computed: false, optional: false, required: true
  private _roleIdEnvVar?: string; 
  public get roleIdEnvVar() {
    return this.getStringAttribute('role_id_env_var');
  }
  public set roleIdEnvVar(value: string) {
    this._roleIdEnvVar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdEnvVarInput() {
    return this._roleIdEnvVar;
  }

  // secret_id_env_var - computed: false, optional: false, required: true
  private _secretIdEnvVar?: string; 
  public get secretIdEnvVar() {
    return this.getStringAttribute('secret_id_env_var');
  }
  public set secretIdEnvVar(value: string) {
    this._secretIdEnvVar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdEnvVarInput() {
    return this._secretIdEnvVar;
  }
}
export interface VaultRadarSecretManagerVaultDedicatedKubernetes {
  /**
  * Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}
  */
  readonly mountPath: string;
  /**
  * Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}
  */
  readonly roleName: string;
}

export function vaultRadarSecretManagerVaultDedicatedKubernetesToTerraform(struct?: VaultRadarSecretManagerVaultDedicatedKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function vaultRadarSecretManagerVaultDedicatedKubernetesToHclTerraform(struct?: VaultRadarSecretManagerVaultDedicatedKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultRadarSecretManagerVaultDedicatedKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultRadarSecretManagerVaultDedicatedKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._roleName = value.roleName;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface VaultRadarSecretManagerVaultDedicatedToken {
  /**
  * Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}
  */
  readonly tokenEnvVar: string;
}

export function vaultRadarSecretManagerVaultDedicatedTokenToTerraform(struct?: VaultRadarSecretManagerVaultDedicatedToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_env_var: cdktf.stringToTerraform(struct!.tokenEnvVar),
  }
}


export function vaultRadarSecretManagerVaultDedicatedTokenToHclTerraform(struct?: VaultRadarSecretManagerVaultDedicatedToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_env_var: {
      value: cdktf.stringToHclTerraform(struct!.tokenEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultRadarSecretManagerVaultDedicatedTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultRadarSecretManagerVaultDedicatedToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEnvVar = this._tokenEnvVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultRadarSecretManagerVaultDedicatedToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenEnvVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenEnvVar = value.tokenEnvVar;
    }
  }

  // token_env_var - computed: false, optional: false, required: true
  private _tokenEnvVar?: string; 
  public get tokenEnvVar() {
    return this.getStringAttribute('token_env_var');
  }
  public set tokenEnvVar(value: string) {
    this._tokenEnvVar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEnvVarInput() {
    return this._tokenEnvVar;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated}
*/
export class VaultRadarSecretManagerVaultDedicated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_radar_secret_manager_vault_dedicated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultRadarSecretManagerVaultDedicated to import
  * @param importFromId The id of the existing VaultRadarSecretManagerVaultDedicated that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultRadarSecretManagerVaultDedicated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_radar_secret_manager_vault_dedicated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultRadarSecretManagerVaultDedicatedConfig
  */
  public constructor(scope: Construct, id: string, config: VaultRadarSecretManagerVaultDedicatedConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_radar_secret_manager_vault_dedicated',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.111.0',
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
    this._accessReadWrite = config.accessReadWrite;
    this._approlePush.internalValue = config.approlePush;
    this._kubernetes.internalValue = config.kubernetes;
    this._projectId = config.projectId;
    this._token.internalValue = config.token;
    this._vaultUrl = config.vaultUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_read_write - computed: true, optional: true, required: false
  private _accessReadWrite?: boolean | cdktf.IResolvable; 
  public get accessReadWrite() {
    return this.getBooleanAttribute('access_read_write');
  }
  public set accessReadWrite(value: boolean | cdktf.IResolvable) {
    this._accessReadWrite = value;
  }
  public resetAccessReadWrite() {
    this._accessReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessReadWriteInput() {
    return this._accessReadWrite;
  }

  // approle_push - computed: false, optional: true, required: false
  private _approlePush = new VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference(this, "approle_push");
  public get approlePush() {
    return this._approlePush;
  }
  public putApprolePush(value: VaultRadarSecretManagerVaultDedicatedApprolePush) {
    this._approlePush.internalValue = value;
  }
  public resetApprolePush() {
    this._approlePush.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approlePushInput() {
    return this._approlePush.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: VaultRadarSecretManagerVaultDedicatedKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
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

  // token - computed: false, optional: true, required: false
  private _token = new VaultRadarSecretManagerVaultDedicatedTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: VaultRadarSecretManagerVaultDedicatedToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // vault_url - computed: false, optional: false, required: true
  private _vaultUrl?: string; 
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }
  public set vaultUrl(value: string) {
    this._vaultUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUrlInput() {
    return this._vaultUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_read_write: cdktf.booleanToTerraform(this._accessReadWrite),
      approle_push: vaultRadarSecretManagerVaultDedicatedApprolePushToTerraform(this._approlePush.internalValue),
      kubernetes: vaultRadarSecretManagerVaultDedicatedKubernetesToTerraform(this._kubernetes.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      token: vaultRadarSecretManagerVaultDedicatedTokenToTerraform(this._token.internalValue),
      vault_url: cdktf.stringToTerraform(this._vaultUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_read_write: {
        value: cdktf.booleanToHclTerraform(this._accessReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approle_push: {
        value: vaultRadarSecretManagerVaultDedicatedApprolePushToHclTerraform(this._approlePush.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultRadarSecretManagerVaultDedicatedApprolePush",
      },
      kubernetes: {
        value: vaultRadarSecretManagerVaultDedicatedKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultRadarSecretManagerVaultDedicatedKubernetes",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: vaultRadarSecretManagerVaultDedicatedTokenToHclTerraform(this._token.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultRadarSecretManagerVaultDedicatedToken",
      },
      vault_url: {
        value: cdktf.stringToHclTerraform(this._vaultUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
