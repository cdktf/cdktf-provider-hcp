// https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Vault cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#cluster_id VaultPlugin#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#id VaultPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the plugin - Valid options for plugin name - 'venafi-pki-backend'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#plugin_name VaultPlugin#plugin_name}
  */
  readonly pluginName: string;
  /**
  * The type of the plugin - Valid options for plugin type - 'SECRET', 'AUTH', 'DATABASE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#plugin_type VaultPlugin#plugin_type}
  */
  readonly pluginType: string;
  /**
  * 
  * The ID of the HCP project where the HCP Vault cluster is located. 
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#project_id VaultPlugin#project_id}
  */
  readonly projectId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#timeouts VaultPlugin#timeouts}
  */
  readonly timeouts?: VaultPluginTimeouts;
}
export interface VaultPluginTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#default VaultPlugin#default}
  */
  readonly default?: string;
}

export function vaultPluginTimeoutsToTerraform(struct?: VaultPluginTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function vaultPluginTimeoutsToHclTerraform(struct?: VaultPluginTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultPluginTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultPluginTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultPluginTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin hcp_vault_plugin}
*/
export class VaultPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultPlugin to import
  * @param importFromId The id of the existing VaultPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_plugin hcp_vault_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultPluginConfig
  */
  public constructor(scope: Construct, id: string, config: VaultPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_plugin',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._pluginName = config.pluginName;
    this._pluginType = config.pluginType;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // plugin_type - computed: false, optional: false, required: true
  private _pluginType?: string; 
  public get pluginType() {
    return this.getStringAttribute('plugin_type');
  }
  public set pluginType(value: string) {
    this._pluginType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTypeInput() {
    return this._pluginType;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VaultPluginTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VaultPluginTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      plugin_type: cdktf.stringToTerraform(this._pluginType),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: vaultPluginTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_type: {
        value: cdktf.stringToHclTerraform(this._pluginType),
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
      timeouts: {
        value: vaultPluginTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultPluginTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
