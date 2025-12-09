# `dataHcpWaypointTemplate` Submodule <a name="`dataHcpWaypointTemplate` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointTemplate <a name="DataHcpWaypointTemplate" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template hcp_waypoint_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: typing.List[str] = None,
  id: str = None,
  name: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.actions">actions</a></code> | <code>typing.List[str]</code> | List of actions by 'ID' to assign to this Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Template is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.actions"></a>

- *Type:* typing.List[str]

List of actions by 'ID' to assign to this Template.

Applications created from this Template will have these actions assigned to them. Only 'ID' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#actions DataHcpWaypointTemplate#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#id DataHcpWaypointTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#name DataHcpWaypointTemplate#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#project_id DataHcpWaypointTemplate#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpWaypointTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpWaypointTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpWaypointTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpWaypointTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleId">terraform_no_code_module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.variableOptions">variable_options</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList">DataHcpWaypointTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `readme_markdown_template`<sup>Required</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `terraform_agent_pool_id`<sup>Required</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformAgentPoolId"></a>

```python
terraform_agent_pool_id: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `terraform_execution_mode`<sup>Required</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformExecutionMode"></a>

```python
terraform_execution_mode: str
```

- *Type:* str

---

##### `terraform_no_code_module_id`<sup>Required</sup> <a name="terraform_no_code_module_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleId"></a>

```python
terraform_no_code_module_id: str
```

- *Type:* str

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.terraformNoCodeModuleSource"></a>

```python
terraform_no_code_module_source: str
```

- *Type:* str

---

##### `variable_options`<sup>Required</sup> <a name="variable_options" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.variableOptions"></a>

```python
variable_options: DataHcpWaypointTemplateVariableOptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList">DataHcpWaypointTemplateVariableOptionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointTemplateConfig <a name="DataHcpWaypointTemplateConfig" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: typing.List[str] = None,
  id: str = None,
  name: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.actions">actions</a></code> | <code>typing.List[str]</code> | List of actions by 'ID' to assign to this Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.id">id</a></code> | <code>str</code> | The ID of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Template is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

List of actions by 'ID' to assign to this Template.

Applications created from this Template will have these actions assigned to them. Only 'ID' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#actions DataHcpWaypointTemplate#actions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#id DataHcpWaypointTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#name DataHcpWaypointTemplate#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/waypoint_template#project_id DataHcpWaypointTemplate#project_id}

---

### DataHcpWaypointTemplateTerraformCloudWorkspaceDetails <a name="DataHcpWaypointTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails()
```


### DataHcpWaypointTemplateVariableOptions <a name="DataHcpWaypointTemplateVariableOptions" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataHcpWaypointTemplateTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointTemplateTerraformCloudWorkspaceDetails</a>

---


### DataHcpWaypointTemplateVariableOptionsList <a name="DataHcpWaypointTemplateVariableOptionsList" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHcpWaypointTemplateVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataHcpWaypointTemplateVariableOptionsOutputReference <a name="DataHcpWaypointTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_template

dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.userEditable">user_editable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions">DataHcpWaypointTemplateVariableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_editable`<sup>Required</sup> <a name="user_editable" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.userEditable"></a>

```python
user_editable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataHcpWaypointTemplateVariableOptions
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointTemplate.DataHcpWaypointTemplateVariableOptions">DataHcpWaypointTemplateVariableOptions</a>

---



