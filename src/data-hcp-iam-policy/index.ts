// https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A binding associates a set of principals to a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy#bindings DataHcpIamPolicy#bindings}
  */
  readonly bindings: DataHcpIamPolicyBindings[] | cdktf.IResolvable;
}
export interface DataHcpIamPolicyBindings {
  /**
  * The set of principals to bind to the given role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy#principals DataHcpIamPolicy#principals}
  */
  readonly principals: string[];
  /**
  * The role name to bind to the given principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy#role DataHcpIamPolicy#role}
  */
  readonly role: string;
}

export function dataHcpIamPolicyBindingsToTerraform(struct?: DataHcpIamPolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataHcpIamPolicyBindingsToHclTerraform(struct?: DataHcpIamPolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHcpIamPolicyBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHcpIamPolicyBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpIamPolicyBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
      this._role = value.role;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class DataHcpIamPolicyBindingsList extends cdktf.ComplexList {
  public internalValue? : DataHcpIamPolicyBindings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHcpIamPolicyBindingsOutputReference {
    return new DataHcpIamPolicyBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy hcp_iam_policy}
*/
export class DataHcpIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpIamPolicy to import
  * @param importFromId The id of the existing DataHcpIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/data-sources/iam_policy hcp_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.94.1',
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
    this._bindings.internalValue = config.bindings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindings - computed: false, optional: false, required: true
  private _bindings = new DataHcpIamPolicyBindingsList(this, "bindings", true);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataHcpIamPolicyBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bindings: cdktf.listMapper(dataHcpIamPolicyBindingsToTerraform, false)(this._bindings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindings: {
        value: cdktf.listMapperHcl(dataHcpIamPolicyBindingsToHclTerraform, false)(this._bindings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHcpIamPolicyBindingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
