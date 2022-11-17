// https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HvnPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique URL of one of the HVNs being peered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#hvn_1 HvnPeeringConnection#hvn_1}
  */
  readonly hvn1: string;
  /**
  * The unique URL of one of the HVNs being peered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#hvn_2 HvnPeeringConnection#hvn_2}
  */
  readonly hvn2: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#id HvnPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#timeouts HvnPeeringConnection#timeouts}
  */
  readonly timeouts?: HvnPeeringConnectionTimeouts;
}
export interface HvnPeeringConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#create HvnPeeringConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#default HvnPeeringConnection#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection#delete HvnPeeringConnection#delete}
  */
  readonly delete?: string;
}

export function hvnPeeringConnectionTimeoutsToTerraform(struct?: HvnPeeringConnectionTimeoutsOutputReference | HvnPeeringConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class HvnPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HvnPeeringConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HvnPeeringConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection hcp_hvn_peering_connection}
*/
export class HvnPeeringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_hvn_peering_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/r/hvn_peering_connection hcp_hvn_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HvnPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: HvnPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_hvn_peering_connection',
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
    this._hvn1 = config.hvn1;
    this._hvn2 = config.hvn2;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // hvn_1 - computed: false, optional: false, required: true
  private _hvn1?: string; 
  public get hvn1() {
    return this.getStringAttribute('hvn_1');
  }
  public set hvn1(value: string) {
    this._hvn1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvn1Input() {
    return this._hvn1;
  }

  // hvn_2 - computed: false, optional: false, required: true
  private _hvn2?: string; 
  public get hvn2() {
    return this.getStringAttribute('hvn_2');
  }
  public set hvn2(value: string) {
    this._hvn2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvn2Input() {
    return this._hvn2;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // peering_id - computed: true, optional: false, required: false
  public get peeringId() {
    return this.getStringAttribute('peering_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HvnPeeringConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HvnPeeringConnectionTimeouts) {
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
      hvn_1: cdktf.stringToTerraform(this._hvn1),
      hvn_2: cdktf.stringToTerraform(this._hvn2),
      id: cdktf.stringToTerraform(this._id),
      timeouts: hvnPeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
