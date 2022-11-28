// https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpConsulAgentKubernetesSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Consul cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret#cluster_id DataHcpConsulAgentKubernetesSecret#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret#id DataHcpConsulAgentKubernetesSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret#timeouts DataHcpConsulAgentKubernetesSecret#timeouts}
  */
  readonly timeouts?: DataHcpConsulAgentKubernetesSecretTimeouts;
}
export interface DataHcpConsulAgentKubernetesSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret#default DataHcpConsulAgentKubernetesSecret#default}
  */
  readonly default?: string;
}

export function dataHcpConsulAgentKubernetesSecretTimeoutsToTerraform(struct?: DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference | DataHcpConsulAgentKubernetesSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHcpConsulAgentKubernetesSecretTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHcpConsulAgentKubernetesSecretTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret hcp_consul_agent_kubernetes_secret}
*/
export class DataHcpConsulAgentKubernetesSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_consul_agent_kubernetes_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/d/consul_agent_kubernetes_secret hcp_consul_agent_kubernetes_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpConsulAgentKubernetesSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpConsulAgentKubernetesSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_consul_agent_kubernetes_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.49.0',
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpConsulAgentKubernetesSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpConsulAgentKubernetesSecretTimeouts) {
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
      timeouts: dataHcpConsulAgentKubernetesSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
