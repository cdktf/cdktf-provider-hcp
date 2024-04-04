# `dataHcpBoundaryCluster` Submodule <a name="`dataHcpBoundaryCluster` Submodule" id="@cdktf/provider-hcp.dataHcpBoundaryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpBoundaryCluster <a name="DataHcpBoundaryCluster" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster hcp_boundary_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpBoundaryClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#id DataHcpBoundaryCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#cluster_id DataHcpBoundaryCluster#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#id DataHcpBoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project configured in the HCP provider config block will be used.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#project_id DataHcpBoundaryCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#timeouts DataHcpBoundaryCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#default DataHcpBoundaryCluster#default}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpBoundaryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpBoundaryCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpBoundaryCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpBoundaryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpBoundaryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterUrl">cluster_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.maintenanceWindowConfig">maintenance_window_config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList">DataHcpBoundaryClusterMaintenanceWindowConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference">DataHcpBoundaryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_url`<sup>Required</sup> <a name="cluster_url" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterUrl"></a>

```python
cluster_url: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `maintenance_window_config`<sup>Required</sup> <a name="maintenance_window_config" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.maintenanceWindowConfig"></a>

```python
maintenance_window_config: DataHcpBoundaryClusterMaintenanceWindowConfigList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList">DataHcpBoundaryClusterMaintenanceWindowConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.timeouts"></a>

```python
timeouts: DataHcpBoundaryClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference">DataHcpBoundaryClusterTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcpBoundaryClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpBoundaryClusterConfig <a name="DataHcpBoundaryClusterConfig" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  project_id: str = None,
  timeouts: DataHcpBoundaryClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Boundary cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#id DataHcpBoundaryCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Boundary cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the Boundary cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#cluster_id DataHcpBoundaryCluster#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#id DataHcpBoundaryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Boundary cluster is located.

If not specified, the project configured in the HCP provider config block will be used.
If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#project_id DataHcpBoundaryCluster#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterConfig.property.timeouts"></a>

```python
timeouts: DataHcpBoundaryClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#timeouts DataHcpBoundaryCluster#timeouts}

---

### DataHcpBoundaryClusterMaintenanceWindowConfig <a name="DataHcpBoundaryClusterMaintenanceWindowConfig" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfig()
```


### DataHcpBoundaryClusterTimeouts <a name="DataHcpBoundaryClusterTimeouts" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#default DataHcpBoundaryCluster#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/data-sources/boundary_cluster#default DataHcpBoundaryCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpBoundaryClusterMaintenanceWindowConfigList <a name="DataHcpBoundaryClusterMaintenanceWindowConfigList" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference <a name="DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType">upgrade_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfig">DataHcpBoundaryClusterMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upgrade_type`<sup>Required</sup> <a name="upgrade_type" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.upgradeType"></a>

```python
upgrade_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataHcpBoundaryClusterMaintenanceWindowConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterMaintenanceWindowConfig">DataHcpBoundaryClusterMaintenanceWindowConfig</a>

---


### DataHcpBoundaryClusterTimeoutsOutputReference <a name="DataHcpBoundaryClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_boundary_cluster

dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcpBoundaryClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.dataHcpBoundaryCluster.DataHcpBoundaryClusterTimeouts">DataHcpBoundaryClusterTimeouts</a>]

---



