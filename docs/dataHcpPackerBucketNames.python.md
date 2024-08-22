# `dataHcpPackerBucketNames` Submodule <a name="`dataHcpPackerBucketNames` Submodule" id="@cdktf/provider-hcp.dataHcpPackerBucketNames"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpPackerBucketNames <a name="DataHcpPackerBucketNames" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names hcp_packer_bucket_names}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNames(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpPackerBucketNamesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#id DataHcpPackerBucketNames#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Packer registry is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#id DataHcpPackerBucketNames#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the HCP Packer registry is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#project_id DataHcpPackerBucketNames#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#timeouts DataHcpPackerBucketNames#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#default DataHcpPackerBucketNames#default}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpPackerBucketNames resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNames.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNames.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNames.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNames.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpPackerBucketNames resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpPackerBucketNames to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpPackerBucketNames that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpPackerBucketNames to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference">DataHcpPackerBucketNamesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.timeouts"></a>

```python
timeouts: DataHcpPackerBucketNamesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference">DataHcpPackerBucketNamesTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcpPackerBucketNamesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNames.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpPackerBucketNamesConfig <a name="DataHcpPackerBucketNamesConfig" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpPackerBucketNamesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#id DataHcpPackerBucketNames#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Packer registry is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#id DataHcpPackerBucketNames#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the HCP Packer registry is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#project_id DataHcpPackerBucketNames#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesConfig.property.timeouts"></a>

```python
timeouts: DataHcpPackerBucketNamesTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#timeouts DataHcpPackerBucketNames#timeouts}

---

### DataHcpPackerBucketNamesTimeouts <a name="DataHcpPackerBucketNamesTimeouts" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#default DataHcpPackerBucketNames#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/data-sources/packer_bucket_names#default DataHcpPackerBucketNames#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpPackerBucketNamesTimeoutsOutputReference <a name="DataHcpPackerBucketNamesTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_packer_bucket_names

dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcpPackerBucketNamesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpPackerBucketNames.DataHcpPackerBucketNamesTimeouts">DataHcpPackerBucketNamesTimeouts</a>]

---



