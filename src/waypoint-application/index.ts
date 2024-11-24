/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Input variables set for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#application_input_variables WaypointApplication#application_input_variables}
  */
  readonly applicationInputVariables?: WaypointApplicationApplicationInputVariables[] | cdktf.IResolvable;
  /**
  * The name of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#name WaypointApplication#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint Application is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#project_id WaypointApplication#project_id}
  */
  readonly projectId?: string;
  /**
  * Instructions for using the Application (markdown format supported). Note: this is a base64 encoded string, and can only be set in configuration after initial creation. The initial version of the README is generated from the README Template from source Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#readme_markdown WaypointApplication#readme_markdown}
  */
  readonly readmeMarkdown?: string;
  /**
  * ID of the Template this Application is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#template_id WaypointApplication#template_id}
  */
  readonly templateId: string;
}
export interface WaypointApplicationApplicationInputVariables {
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#name WaypointApplication#name}
  */
  readonly name: string;
  /**
  * Variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#value WaypointApplication#value}
  */
  readonly value: string;
  /**
  * Variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#variable_type WaypointApplication#variable_type}
  */
  readonly variableType: string;
}

export function waypointApplicationApplicationInputVariablesToTerraform(struct?: WaypointApplicationApplicationInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}


export function waypointApplicationApplicationInputVariablesToHclTerraform(struct?: WaypointApplicationApplicationInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_type: {
      value: cdktf.stringToHclTerraform(struct!.variableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaypointApplicationApplicationInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WaypointApplicationApplicationInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableType = this._variableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointApplicationApplicationInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._variableType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._variableType = value.variableType;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_type - computed: false, optional: false, required: true
  private _variableType?: string; 
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string) {
    this._variableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType;
  }
}

export class WaypointApplicationApplicationInputVariablesList extends cdktf.ComplexList {
  public internalValue? : WaypointApplicationApplicationInputVariables[] | cdktf.IResolvable

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
  public get(index: number): WaypointApplicationApplicationInputVariablesOutputReference {
    return new WaypointApplicationApplicationInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaypointApplicationOutputValues {
}

export function waypointApplicationOutputValuesToTerraform(struct?: WaypointApplicationOutputValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function waypointApplicationOutputValuesToHclTerraform(struct?: WaypointApplicationOutputValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WaypointApplicationOutputValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WaypointApplicationOutputValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointApplicationOutputValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitive - computed: true, optional: false, required: false
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class WaypointApplicationOutputValuesList extends cdktf.ComplexList {

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
  public get(index: number): WaypointApplicationOutputValuesOutputReference {
    return new WaypointApplicationOutputValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaypointApplicationTemplateInputVariables {
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#name WaypointApplication#name}
  */
  readonly name: string;
  /**
  * Variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#value WaypointApplication#value}
  */
  readonly value: string;
  /**
  * Variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#variable_type WaypointApplication#variable_type}
  */
  readonly variableType?: string;
}

export function waypointApplicationTemplateInputVariablesToTerraform(struct?: WaypointApplicationTemplateInputVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}


export function waypointApplicationTemplateInputVariablesToHclTerraform(struct?: WaypointApplicationTemplateInputVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_type: {
      value: cdktf.stringToHclTerraform(struct!.variableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaypointApplicationTemplateInputVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WaypointApplicationTemplateInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableType = this._variableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaypointApplicationTemplateInputVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
      this._variableType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
      this._variableType = value.variableType;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_type - computed: true, optional: true, required: false
  private _variableType?: string; 
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string) {
    this._variableType = value;
  }
  public resetVariableType() {
    this._variableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType;
  }
}

export class WaypointApplicationTemplateInputVariablesList extends cdktf.ComplexList {
  public internalValue? : WaypointApplicationTemplateInputVariables[] | cdktf.IResolvable

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
  public get(index: number): WaypointApplicationTemplateInputVariablesOutputReference {
    return new WaypointApplicationTemplateInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application hcp_waypoint_application}
*/
export class WaypointApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointApplication to import
  * @param importFromId The id of the existing WaypointApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/waypoint_application hcp_waypoint_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_application',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.99.0',
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
    this._applicationInputVariables.internalValue = config.applicationInputVariables;
    this._name = config.name;
    this._projectId = config.projectId;
    this._readmeMarkdown = config.readmeMarkdown;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_input_variables - computed: false, optional: true, required: false
  private _applicationInputVariables = new WaypointApplicationApplicationInputVariablesList(this, "application_input_variables", true);
  public get applicationInputVariables() {
    return this._applicationInputVariables;
  }
  public putApplicationInputVariables(value: WaypointApplicationApplicationInputVariables[] | cdktf.IResolvable) {
    this._applicationInputVariables.internalValue = value;
  }
  public resetApplicationInputVariables() {
    this._applicationInputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInputVariablesInput() {
    return this._applicationInputVariables.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // output_values - computed: true, optional: false, required: false
  private _outputValues = new WaypointApplicationOutputValuesList(this, "output_values", false);
  public get outputValues() {
    return this._outputValues;
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

  // readme_markdown - computed: true, optional: true, required: false
  private _readmeMarkdown?: string; 
  public get readmeMarkdown() {
    return this.getStringAttribute('readme_markdown');
  }
  public set readmeMarkdown(value: string) {
    this._readmeMarkdown = value;
  }
  public resetReadmeMarkdown() {
    this._readmeMarkdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeMarkdownInput() {
    return this._readmeMarkdown;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_input_variables - computed: true, optional: false, required: false
  private _templateInputVariables = new WaypointApplicationTemplateInputVariablesList(this, "template_input_variables", true);
  public get templateInputVariables() {
    return this._templateInputVariables;
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_input_variables: cdktf.listMapper(waypointApplicationApplicationInputVariablesToTerraform, false)(this._applicationInputVariables.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      readme_markdown: cdktf.stringToTerraform(this._readmeMarkdown),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_input_variables: {
        value: cdktf.listMapperHcl(waypointApplicationApplicationInputVariablesToHclTerraform, false)(this._applicationInputVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WaypointApplicationApplicationInputVariablesList",
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
      readme_markdown: {
        value: cdktf.stringToHclTerraform(this._readmeMarkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
