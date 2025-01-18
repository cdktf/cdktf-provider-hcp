# `dataHcpIamPolicy` Submodule <a name="`dataHcpIamPolicy` Submodule" id="@cdktf/provider-hcp.dataHcpIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpIamPolicy <a name="DataHcpIamPolicy" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy hcp_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bindings: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]</code> | A binding associates a set of principals to a role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.Initializer.parameter.bindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]

A binding associates a set of principals to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy#bindings DataHcpIamPolicy#bindings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings">put_bindings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bindings` <a name="put_bindings" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings"></a>

```python
def put_bindings(
  value: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.putBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList">DataHcpIamPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindingsInput">bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindings"></a>

```python
bindings: DataHcpIamPolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList">DataHcpIamPolicyBindingsList</a>

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `bindings_input`<sup>Optional</sup> <a name="bindings_input" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.bindingsInput"></a>

```python
bindings_input: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpIamPolicyBindings <a name="DataHcpIamPolicyBindings" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicyBindings(
  principals: typing.List[str],
  role: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.principals">principals</a></code> | <code>typing.List[str]</code> | The set of principals to bind to the given role. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.role">role</a></code> | <code>str</code> | The role name to bind to the given principals. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

The set of principals to bind to the given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy#principals DataHcpIamPolicy#principals}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings.property.role"></a>

```python
role: str
```

- *Type:* str

The role name to bind to the given principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy#role DataHcpIamPolicy#role}

---

### DataHcpIamPolicyConfig <a name="DataHcpIamPolicyConfig" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bindings: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]</code> | A binding associates a set of principals to a role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyConfig.property.bindings"></a>

```python
bindings: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]

A binding associates a set of principals to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/data-sources/iam_policy#bindings DataHcpIamPolicy#bindings}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpIamPolicyBindingsList <a name="DataHcpIamPolicyBindingsList" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicyBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHcpIamPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataHcpIamPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]]

---


### DataHcpIamPolicyBindingsOutputReference <a name="DataHcpIamPolicyBindingsOutputReference" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_iam_policy

dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcpIamPolicyBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpIamPolicy.DataHcpIamPolicyBindings">DataHcpIamPolicyBindings</a>]

---



